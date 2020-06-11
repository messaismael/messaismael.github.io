---
layout: post
title: How to run a React App  with ElectronJS
subtitle: Deploy React App with electronJs
gh-repo: messaismael/quote-machine-electronJS
gh-badge: [fork, follow]
cover-img: /assets/img/electronCoverImg.jpeg
tags: [tutorial]
comments: true
---


In this article i want to show you how to run yours react project with Electron.

## Creacte a React App

For this we will use [create-react-app](https://create-react-app.dev/docs/getting-started/).

~~~
& npx create-react-app App
& cd App
& npm start
~~~

After creating my project which is a react application which generates random quotes you can show it in this [repository](https://github.com/messaismael/quote-machine-electronJS).

## Generate your app for production

Builds the app for production to the ``build`` folder. It correctly bundles React in production mode and optimizes the build for the best performance. Type the following command:

~~~
& npm run build
~~~

## Installing ElectronJS

Here we will add electron as dev dependencies

~~~
& npm install --save-dev electron
~~~

## electron Development

The Electron applications are developed in javascript using the same principles and methods found in ``NodeJS`` development. All APIs and features found in electron are accessible through the ``electron`` module, which can be required like any other ``NodeJS`` module:

~~~
const electron = require('electron')
~~~

- Config the file ``main.js`` 

    First of all create a file **main.js** 

    ~~~
    & touch main.js
    ~~~

    The file ``main.js``  might wait for the application to be ready and open index.html of your project in a window:

    ```

    const { app, BrowserWindow } = require('electron')
    function createWindow () {   
        // Create the browser window.
        let win = new BrowserWindow({   
            width: 900,
            height: 800,
            minWidth: 500,
            minHeight: 800,
            webPreferences: {   
                nodeIntegration: true  
            }   
        })
   
    // and load the index.html of the app.
    win.loadFile('index.html');
    }
 
    app.on('ready',function(){
        createWindow();
    })

    ```

    In my case the index.html is in build folder ,so i must have this:

    ```

    const { app, BrowserWindow } = require('electron')
    var path = require('path')
    function createWindow () {   
        // Create the browser window.
        let win = new BrowserWindow({   
            width: 900,
            height: 800,
            minWidth:500,
            minHeight:800, 
            webPreferences: {   
                nodeIntegration: true  
            }   
        })
   
        // and load the index.html of the app.
        win.loadFile(path.join('build','index.html'));
    }
 
    app.on('ready',function(){
        createWindow();
    })

    app.on('window-all-closed', () => {
        // On macOS it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    ```

    In our electron window, we will add About menu and dev tool in menu bar, for that, we will use Class:Menu of electonJS.
    Before to start, install about-window to provide "About this App" window for electron application:

    ```
    $ npm install about-window
    ```

    This code below display  "about App" and "dev tool" in menu bar of our electron window;

    ````

    const { app, BrowserWindow, Menu } = require('electron');
    const openAboutWindow = require('about-window').default;
    {
        ...

        const template = [
            {
                label: 'About',
                click: () =>
                openAboutWindow({
                    icon_path: `${__dirname}/build/logo512.png`,
                    homepage: 'https://github.com/messaismael/',
                    description: 'Random quote machine',
                    copyright: "Copyright © Quote Machine 2020",
                    adjust_window_size: true,
                    open_devtools: false,
                    win_options: {
                        modal: false,
                        resizable: false,
                    },
                    show_close_button: 'Close',
                }),
            },
            {
                label: 'Dev Tools',
                click:() => {
                // Open the DevTools.
                    const currentW = BrowserWindow.getFocusedWindow();
                    // to open devtool in only main window
                    if (currentW) currentW.webContents.openDevTools();
                }
            }
        ]
        const menu = Menu.buildFromTemplate(template);
        app.applicationMenu = menu;
    ...
    )}

    ````

    Finally we will have this code in our main.js file

    <script src="https://gist.github.com/messaismael/0311bd999853adadf2b9fe3ae84f8820.js"></script>


- Config ``package.json``

    In ``package.json`` file we will add ``"main"`` field and pass ``"main.js"`` as value and add"homepage" field with "." as value like this

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

Thank you for your attention!
