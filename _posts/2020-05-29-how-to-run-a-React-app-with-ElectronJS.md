---
layout: post
title: How to run an App React with ElectronJS
subtitle: Deploy react app with electronJs
gh-repo: messaismael/quote-machine-electronJS
gh-badge: [fork, follow]
cover-img: /assets/img/electronCoverImg.jpeg
tags: [tutorial]
comments: true
---


In this article i want to show you how to run yours react project with Electron.The original project describe in this article is [here](https://github.com/messaismael/quote-machine-electronJS).

## Creacte a React App

For this we will use [create-react-app](https://create-react-app.dev/docs/getting-started/).

~~~-
& npx create-react-app App
& cd App 
& npm start
~~~

After creating my project which is a react application which generates random quotes you can show it in this [repository](https://github.com/messaismael/quote-machine-electronJS).

## Generate your app for production

for that:

~~~
& npm run build
~~~

## Installing ElectronJS

Here we will electron as dev dependencies

~~~
& npm install --save-dev electron
~~~

## electron Development

In fact the Electron applications are developed in ``Javascript`` using the same as that provided by ``Node.js``. All the features found in electron are accessible through the ``electron module``, which can be required like any other Node.js module:

~~~
const electron = require('electron')
~~~

- config main.js file

    first of all create ``main.js`` file

    ~~~
    & touch main.js
    ~~~

    then in main.jsfile we will paste this folliwing code

    <script src="https://gist.github.com/messaismael/0311bd999853adadf2b9fe3ae84f8820.js"></script>

- config ``package.json``

    In ``package.json`` file we will add "main"field and pass "main.js" as value and add"homepage" field with "." as value like this

    <script src="https://gist.github.com/messaismael/72bdc2374a44d85813f7e7c5b10ae981.js"></script>

    and in ``script`` field add this command:
     
     ~~~
    "electron": "electron ."
     ~~~

## Running app

to run

~~~
& npm run electon
~~~     

we will have this result

![Crepe](/assets/img/Screenshot-quote.png){: .mx-auto.d-block :}

Thank you for your attention!!