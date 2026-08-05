---
layout: post
title: Deploy a React App on S3 with CDK using python
subtitle: Hosting a static App using Amazon S3
gh-repo: messaismael/react-app-cdk
cover-img: /assets/img/article6/cover.jpeg
thumbnail-img: /assets/img/article6/cover.jpeg
tags: [tutorial, awsS3, awsCDK, python]
comments: true
---

## Introduction

In today's technology-driven world, web applications have become integral to businesses. With the increasing demand for web applications, developers are constantly looking for efficient and easy ways to deploy their applications. AWS provides an easy-to-use framework for deploying web applications using S3 and a modern programming language of your choice. In this article, we will explore how to deploy a React app on S3 with CDK using Python. I will walk you through the steps required to set up your environment and deploy your React app on AWS.

**AWS Cloud Development Kit (AWS CDK)** is a framework that lets you use modern programming languages to easily define, manage, provision, and deploy cloud infrastructure resources using AWS CloudFormation.

### Prerequisites

- AWS CDK installed
- [AWS Account with AWS CLI credentials configured](https://blog.numericaideas.com/configure-aws-cli)
- Python 3.8 installed

## Initialize a CDK project

To initialize a CDK project with Python, you must follow this:

```shell
$ mkdir react-app-cdk  #The name of the folder will determine the name of your project
$ cd react-app-cdk
$ cdk init app --language python
```

Once these commands are well executed, in the directory `react-app-cdk`, we will have the file structure of a CDK project with Python.

![Project structure](/assets/img/article6/img1.png){: .mx-auto.d-block :}

Let's take a look at some important files you must know :

- `react_app_cdk_stack.py`: as its name indicated it's here where we are going to define the stack of our project. A **Stack** is a collection of AWS resources that you can manage as a single unit on AWS CloudFormation.
- `app.py`: it's where our CDK app and Stack are instantiated.
- `cdk.json`: is a configuration file that specifies options for the AWS CloudFormation stack that will be created by the CDK. Ex: you can specify which files to track changes or not when you make updates, and tell the CDK CLI how to execute our code.

### Create a React project

After setting up our CDK app, now you can create the React app in the route folder of our CDK project.

```shell
$ npx create-react-app my-app --template typescript
$ cd my-app
```

The next step is to build the React app

```shell
$ npm run build
```

It will create a build folder containing a production build of our app that we will upload on S3 in the next step.

![Project structure after build](/assets/img/article6/img2.png){: .mx-auto.d-block :}

## Config AWS S3 RESOURCE

In this step, we are going to set up a s3 bucket to host our react app as a static website. This resource is useful to learn more about [Hosting a static website using Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html), the steps are described using the AWS console. We going to make that using code from the `react_app_cdk_stack.py` file.

### Create a S3 Bucket

We will create a s3 bucket, configure it to be accessible through the internet, and specify the entry point of our website:

```python
bucket = aws_s3.Bucket(
    self,
    "ReactBucket",
    bucket_name="react-bucket",
    public_read_access=True,
    block_public_access=aws_s3.BlockPublicAccess(
        block_public_acls=False,
        block_public_policy=False,
        ignore_public_acls=False,
        restrict_public_buckets=False,
    ),
    access_control=aws_s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
    website_index_document="index.html",
)
```

### Upload the app code into our bucket

```python
aws_s3_deployment.BucketDeployment(
    self,
    "ReactAppStaticWebsite",
    sources=[s3_deployment.Source.asset("./my-app/build")], # The path to the build folder
    destination_bucket=bucket,
)
```

After adding these configurations to our stack the next step is to check if everything is correct by synthesizing the CloudFormation template for this code :

```shell
$ cdk synth
```

## Deploy and Test

```shell
$ cdk deploy
```

Get the URL from outputs of the console and open it in a browser.
The whole project is available [Here](https://github.com/messaismael/react-app-cdk).

## Conclusion

In summary, deploying a React app on S3 with CDK using Python is a simple process that allows developers to easily create and manage infrastructure as code. By leveraging AWS's power, developers can easily host static websites and web applications while benefiting from scalability and reliability. This is a valuable skill for any developer looking to deploy their React app on AWS.

Thanks for reading, I'm open to any suggestions, if this was helpful let me know!
