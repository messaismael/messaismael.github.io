---
layout: post
title: Improve Email Sending with Amazon SQS and DynamoDB
subtitle: Build a scalable email sending with AWS cloud computing
gh-repo: messaismael/scalable-send-email-service
cover-img: /assets/img/article5/cover.jpeg
thumbnail-img: /assets/img/article5/cover.jpeg
tags: [tutorial, awsLambda, awsSQS, awsDynamoDB, nodeJs]
comments: true
---

In this article, we will talk about email sending which we already covered in the last [article](https://messaismael.medium.com/build-an-email-sending-service-with-aws-lambda-bcf522199f1b). But this one is an improvement over the last, the principal objective is to allow email sending while handling the risk of failure during the process, for this, we introduce the notion of **Queue** with **Amazon SQS** and **DynamoDB**.

**Amazon SQS** (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Using **SQS**, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.

**Amazon DynamoDB** is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data export tools.

## Project structure

Having a good starting point when it comes to our project architecture is vital for the project itself and how you will be able to tackle changing needs in the future.

Amazon SQS allows us to send data in the queue as messages and pull these messages. It offers two types of message queues. Standard queues offer maximum throughput, best-effort ordering, and at least-once delivery. SQS FIFO(First In First Out) queues are designed to guarantee that messages are processed exactly once, in the exact order they are sent.

In our case, we'll first use a standard queue because it allows a nearly unlimited number of transactions per second. Unlike FIFO, this queue doesn't guarantee that the message is delivered exactly once, that is why we used Amazon Dyanmodb to store the state of our messages and know if a message has already been delivered or not. So to do this we structured it as follows:

- **Send_service**: A microservice that allows sending email data as messages in the queue and saving that message to Dynamodb.
- **Receive_service**: A microservice that pulls messages and checks their status before processing them.

Both are **Lambda functions** powered by **ClaudiaJs** and set up like [here](https://messaismael.medium.com/build-an-email-sending-service-with-aws-lambda-bcf522199f1b).

## Send_service

The primary purpose of this microservice is to send email data as a message in the queue that it creates if it doesn't exist. To achieve this, the following steps have been necessary.

```
$ mkdir scalable_email_sending
$ cd scalable_email_sending // the main directory
$ mkdir send_service receive_service
$ cd send_service
```

### 1. Add policies

Below we have the policy which gives the correct permissions for our service that allow it to create a queue, send messages and add data to a DynamoDB table.

**`/send_service/policies/policies.json`**

```
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "sqs:CreateQueue",
      "sqs:SendMessage"
    ],
    "Resource": "*"
  },
  {
    "Effect": "Allow",
    "Action": [
      "dynamodb:PutItem"
    ],
    "Resource": "*"
  }]
}
```

### 2. Create a table and queue

If you haven't a DynamoDB table and SQS queue created yet, the following instructions will help you to get them using AWS CLI.

```
$ npm i cross-var dotenv-cli
```

They will allow us to use `.env` variables in the `package.json` file

[https://www.genui.com/resources/env-variables-json](https://www.genui.com/resources/env-variables-json)

Now we will add in the `.env` file the table and the queue name like below:

`/send_service/.env`

```
QUEUE_NAME=email_queue
TABLE_NAME=sqsmessagedb
```

then add these scripts in the `package.json`

```
...
"create:queue": "dotenv -- cross-var aws sqs create-queue --queue-name %QUEUE_NAME% --attributes DelaySeconds=60,MessageRetentionPeriod=86400",

"create:table": "dotenv -- cross-var aws dynamodb create-table  --table-name %TABLE_NAME%  --attribute-definitions AttributeName=messageId,AttributeType=S  --key-schema AttributeName=messageId,KeyType=HASH  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1  --region us-east-1  --query TableDescription.TableArn  --output text",
...
```

### 3. Environment variables

`/send_service/env.json`

```
{
  "NODE_ENV": "dev",
  "QUEUE_URL": "https://XXXXXX/email-queue",
  "TABLE_NAME": "sqsmessagedb"
}
```

### 4.Send a Message

`/send_service/src/sqs/index.ts`

<script src="https://gist.github.com/messaismael/c397716f21fee87394df15d898b30e45.js"></script>

About the parameters, you can see them [here](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html).

### 5. Send Message Service

This is where we send the message in the queue and save the message status in DynamoDB Table. The code below is the result:

`/send_service/src/service/index.ts`

<script src="https://gist.github.com/messaismael/9850e3f28dfcf3e35bc5a32654aadcf2.js"></script>

## Receive_service

To receive a message it is necessary that the function is triggered, for that we used [SQS Triggers](https://claudiajs.com/news/2018/07/19/claudia-5.1.html) to wire up a Lambda to an SQS queue.

```
$ cd receive_service
```

### 1. Add policies

**`/receive_service/policies/policies.json`**

<script src="https://gist.github.com/messaismael/104cee0b6d9fd6e5c08626c0ec01907f.js"></script>

These policies allow sending emails with Amazon SES, getting queue URLs, receiving and deleting messages with Amazon SQS, getting items, and updating items with Amazon DynamoDB.

### 2. Environment variables

`/receive_service/env.json`

```
{
    "NODE_ENV": "dev",
    "TO_EMAILS": "email@gmail.com",
    "QUEUE_URL": "https://XXXXXX/email-queue",
    "TABLE_NAME": "sqsmessagedb"
}
```

### 3. Set up SQS event triggers

In the `receive_service/` install these dependencies as we have seen above:

```
$ npm i cross-var dotenv-cli
```

Yeah! Now we will use the [add-sqs-event-source](https://github.com/claudiajs/claudia/blob/master/docs/add-sqs-event-source.md) command, and specify the queue name or ARN with `--queue` to add the trigger, for that we will add a new script in the `package.json` and add `.env` file with the content below:

`/receive_service/.env`

```
QUEUE_NAME=email_queue
```

`/receive_service/package.json`

```
...
"scripts": {
    ...,
    "add:trigger": "dotenv -- cross-var claudia add-sqs-event-source --queue %QUEUE_NAME%",
    ..."
},
...
```

![img2](/assets/img/article5/add-trigger.png){: .mx-auto.d-block :}

### 4. Send email

`/receive_service/src/ses/index.ts`

<script src="https://gist.github.com/messaismael/6e5e58338fbbda730e9ba85b79c4ddc5.js"></script>

### 5. Delete a message

`/receive_service/src/delete_msg.ts`

<script src="https://gist.github.com/messaismael/493336e958b1a91c979ee2cb23208d87.js"></script>

### 6. Handler

This is where we call the functions that intervene in the processing

`/receive_service/src/index.ts`

<script src="https://gist.github.com/messaismael/3a99deebd3a0bb1326b09f12bbb78ee0.js"></script>

When this function is called, it retrieves messages in the `Record` property of the `event` object. Then for each message, it first checks the status of the message in the table before sending an email. When sending is successful, the message status is updated then the message is deleted from the queue.

## Deploy

To execute properly this project, you must follow this [README](https://github.com/messaismael/scalable-send-email-service#deploy) step by step.

<br/>
<br/>

Thank for reading, if it was helpful to you let me know 🙂!
