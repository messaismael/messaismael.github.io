import{I as e,J as t,L as n,R as r,S as i,X as a,b as o,h as s,q as c}from"./t_Ep6KQo.js";import"./xihTtKlq.js";var l=a({default:()=>S,metadata:()=>u}),u={layout:`post`,date:`2020-05-29`,title:`How to run a React App  with ElectronJS`,subtitle:`Deploy React App with electronJs`,"gh-repo":`messaismael/quote-machine-electronJS`,"gh-badge":[`fork`,`follow`],"cover-img":`/assets/img/article1/electronCoverImg.jpeg`,"thumbnail-img":`/assets/img/article1/electronCoverImg.jpeg`,tags:[`tutorial`],comments:!0},{layout:d,date:f,title:p,subtitle:m,"gh-repo":h,"gh-badge":g,"cover-img":_,"thumbnail-img":v,tags:y,comments:b}=u,x=i(`<p>In this article i want to show you how to run yours react project with Electron.</p> <h2>Creacte a React App</h2> <p>For this we will use <a href="https://create-react-app.dev/docs/getting-started/" rel="nofollow">create-react-app</a>.</p> <pre class="language-undefined"></pre> <p>After creating my project which is a react application which generates random quotes you can show it in this <a href="https://github.com/messaismael/quote-machine-electronJS" rel="nofollow">repository</a>.</p> <h2>Generate your app for production</h2> <p>Builds the app for production to the <code>build</code> folder. It correctly bundles React in production mode and optimizes the build for the best performance. Type the following command:</p> <pre class="language-undefined"></pre> <h2>Installing ElectronJS</h2> <p>Here we will add electron as dev dependencies</p> <pre class="language-undefined"></pre> <h2>electron Development</h2> <p>The Electron applications are developed in javascript using the same principles and methods found in <code>NodeJS</code> development. All APIs and features found in electron are accessible through the <code>electron</code> module, which can be required like any other <code>NodeJS</code> module:</p> <pre class="language-undefined"></pre> <ul><li><p>Config the file <code>main.js</code></p> <p>First of all create a file <strong>main.js</strong></p> <pre class="language-undefined"></pre> <p>The file <code>main.js</code> might wait for the application to be ready and open index.html of your project in a window:</p> <pre class="language-undefined"></pre> <p>In my case the index.html is in build folder\xA0,so i must have this:</p> <pre class="language-undefined"></pre> <p>In our electron window, we will add About menu and dev tool in menu bar, for that, we will use Class:Menu of electonJS.
Before to start, install about-window to provide “About this App” window for electron application:</p> <pre class="language-undefined"></pre> <p>This code below display “about App” and “dev tool” in menu bar of our electron window;</p> <pre class="language-undefined"></pre> <p>Finally we will have this code in our main.js file</p> <p><a href="https://gist.github.com/messaismael/0311bd999853adadf2b9fe3ae84f8820" rel="nofollow">View code snippet on GitHub Gist ↗</a></p></li> <li><p>Config <code>package.json</code></p> <p>In <code>package.json</code> file we will add <code>"main"</code> field and pass <code>"main.js"</code> as value and add”homepage” field with ”.” as value like this</p> <p><a href="https://gist.github.com/messaismael/72bdc2374a44d85813f7e7c5b10ae981" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <p>and in <code>script</code> field add this command:</p> <pre class="language-undefined"></pre></li></ul> <h2>Running app</h2> <p>to run</p> <pre class="language-undefined"></pre> <p>we will have this result</p> <p><img src="/assets/img/article1/Screenshot-quote.png" alt="Crepe"/></p> <p>Thank you for your attention!</p>`,1);function S(i){var a=x(),l=r(n(a),6);s(l,()=>`<code class="language-undefined">&amp; npx create-react-app App
&amp; cd App
&amp; npm start</code>`,!0),t(l);var u=r(l,8);s(u,()=>`<code class="language-undefined">&amp; npm run build</code>`,!0),t(u);var d=r(u,6);s(d,()=>`<code class="language-undefined">&amp; npm install --save-dev electron</code>`,!0),t(d);var f=r(d,6);s(f,()=>`<code class="language-undefined">const electron = require(&#39;electron&#39;)</code>`,!0),t(f);var p=r(f,2),m=e(p),h=r(e(m),4);s(h,()=>`<code class="language-undefined">&amp; touch main.js</code>`,!0),t(h);var g=r(h,4);s(g,()=>`<code class="language-undefined">
const &#123; app, BrowserWindow &#125; = require(&#39;electron&#39;)
function createWindow () &#123;
    // Create the browser window.
    let win = new BrowserWindow(&#123;
        width: 900,
        height: 800,
        minWidth: 500,
        minHeight: 800,
        webPreferences: &#123;
            nodeIntegration: true
        &#125;
    &#125;)

// and load the index.html of the app.
win.loadFile(&#39;index.html&#39;);
&#125;

app.on(&#39;ready&#39;,function()&#123;
    createWindow();
&#125;)
</code>`,!0),t(g);var _=r(g,4);s(_,()=>`<code class="language-undefined">
const &#123; app, BrowserWindow &#125; = require(&#39;electron&#39;)
var path = require(&#39;path&#39;)
function createWindow () &#123;
    // Create the browser window.
    let win = new BrowserWindow(&#123;
        width: 900,
        height: 800,
        minWidth:500,
        minHeight:800,
        webPreferences: &#123;
            nodeIntegration: true
        &#125;
    &#125;)

    // and load the index.html of the app.
    win.loadFile(path.join(&#39;build&#39;,&#39;index.html&#39;));
&#125;

app.on(&#39;ready&#39;,function()&#123;
    createWindow();
&#125;)

app.on(&#39;window-all-closed&#39;, () =&gt; &#123;
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== &#39;darwin&#39;) &#123;
        app.quit()
    &#125;
&#125;)
</code>`,!0),t(_);var v=r(_,4);s(v,()=>`<code class="language-undefined">$ npm install about-window</code>`,!0),t(v);var y=r(v,4);s(y,()=>`<code class="language-undefined">
const &#123; app, BrowserWindow, Menu &#125; = require(&#39;electron&#39;);
const openAboutWindow = require(&#39;about-window&#39;).default;
&#123;
    ...

    const template = [
        &#123;
            label: &#39;About&#39;,
            click: () =&gt;
            openAboutWindow(&#123;
                icon_path: &#96;$&#123;__dirname&#125;/build/logo512.png&#96;,
                homepage: &#39;https://github.com/messaismael/&#39;,
                description: &#39;Random quote machine&#39;,
                copyright: &quot;Copyright © Quote Machine 2020&quot;,
                adjust_window_size: true,
                open_devtools: false,
                win_options: &#123;
                    modal: false,
                    resizable: false,
                &#125;,
                show_close_button: &#39;Close&#39;,
            &#125;),
        &#125;,
        &#123;
            label: &#39;Dev Tools&#39;,
            click:() =&gt; &#123;
            // Open the DevTools.
                const currentW = BrowserWindow.getFocusedWindow();
                // to open devtool in only main window
                if (currentW) currentW.webContents.openDevTools();
            &#125;
        &#125;
    ]
    const menu = Menu.buildFromTemplate(template);
    app.applicationMenu = menu;
...
)&#125;
</code>`,!0),t(y),c(4),t(m);var b=r(m,2),S=r(e(b),8);s(S,()=>`<code class="language-undefined">&quot;electron&quot;: &quot;electron .&quot;</code>`,!0),t(S),t(b),t(p);var C=r(p,6);s(C,()=>`<code class="language-undefined">&amp; npm run electon</code>`,!0),t(C),c(6),o(i,a)}var C=a({default:()=>j,metadata:()=>w}),w={layout:`post`,date:`2021-05-04`,title:`How to build a beautiful adaptative layout with\xA0Flutter`,subtitle:`Learn Flutter`,"gh-repo":`messaismael/e-commerce-mobile-app`,"gh-badge":[`fork`,`follow`],"cover-img":`/assets/img/article2/cover.jpg`,"thumbnail-img":`/assets/img/article2/cover.jpg`,tags:[`tutorial`,`flutter`],comments:!0},{layout:T,date:E,title:D,subtitle:O,"gh-repo":ee,"gh-badge":te,"cover-img":ne,"thumbnail-img":re,tags:ie,comments:k}=w,A=i(`<h2><strong>What is\xA0Flutter</strong></h2> <p><strong>Flutter</strong> is an open-source mobile application development SDK that is created by <strong>Google</strong>. It is used to develop applications for <strong>Android</strong> and <strong>IOS</strong>.</p> <p>In this article, we will build the following app designed by <a href="https://vijaygupta.work/?ref=uistore.design" rel="nofollow">Vijay Gupta</a>\xA0:</p> <p><img src="/assets/img/article2/img1.png" alt="img1"/></p> <p>Visibly it looks complicated🤔, but this is not the case no worry!!!😇</p> <h2><strong>Step 1: Implement the flutter app structure</strong></h2> <p>For that, we will use the Scaffold widget. The Scaffold is a widget in Flutter used to implements the basic material design visual layout structure</p> <pre class="language-undefined"></pre> <p><strong>Scaffold</strong> contains various functionality from giving an <strong>appbar</strong>, <strong>body</strong>, a floating button, a drawer</p> <ul><li><p><strong>appBar</strong></p> <p>The Appbar is divided into 5 part like you can see below</p></li></ul> <p><img src="/assets/img/article2/img2.png" alt="img2"/></p> <ul><li><p><strong>body</strong></p> <p>Here we are going to write our stuff</p></li></ul> <p>And we have this after 😃!!</p> <p><img src="/assets/img/article2/img3.png" alt="img3"/></p> <h2><strong>Step 2: Implement the bottom navigation bar</strong></h2> <p><img src="/assets/img/article2/img4.png" alt="img4"/></p> <p>In the code below we create a <strong>Stateless BottomNavBar widget</strong>, that takes in parameter a <strong>number</strong> and a <strong>callback function</strong>.</p> <p><a href="https://gist.github.com/messaismael/20087c6821ef52fda0ebf0eeeea9e008" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <h2><strong>Step 3: Implement the card of the\xA0product</strong></h2> <p>For that, we are going to create a <strong>widget</strong> called <strong>ProductCard</strong>. The main role of the <strong>ProductCard widget</strong> is to display each product with the layout below:</p> <p><img src="/assets/img/article2/img5.png" alt="img5"/></p> <p><strong>ProductCard</strong> is a <strong>Stateful widget</strong> that takes in parameter\xA0:</p> <ul><li>The name of product</li> <li>The product image URL</li></ul> <p>The code below can enlighten you 🧐!</p> <p><a href="https://gist.github.com/messaismael/2a0abce26becedeb9e70f2990580f2fe" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <h2><strong>Step 4: Implement the product\xA0list</strong></h2> <p>Here we will have another widget called <strong>ProductList</strong>, this widget has to goal to display the list of <strong>ProductCard</strong> like a grid. For that, we will use the <strong>GridView widget</strong>. <strong>Gridview</strong> is a widget in flutter that displays the items in a 2-D array(two-dimensional rows and columns). The code that follows is an implementation of <strong>adaptative Gridview</strong> with the method <strong>extent</strong>\xA0:</p> <pre class="language-undefined"></pre> <h2><strong>Step 5: Implement the Carousel 🎠\xA0slider</strong></h2> <p><img src="/assets/img/article2/img6.png" alt="img6"/></p> <p>The carousel package we will be using is <code>carousel_slider</code>: <a href="https://pub.dev/packages/carousel_slider" rel="nofollow">https://pub.dev/packages/carousel_slider</a>.</p> <p>In the <code>pubspec.yaml</code> file adds the current package like this:</p> <pre class="language-undefined"></pre> <p>Next, run</p> <pre class="language-undefined"></pre> <p>Below you can see the implementation of the <strong>CarouselWidget</strong>:</p> <p><a href="https://gist.github.com/messaismael/cc2808c3ad2fc2a4463f0e218234d867" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <h2><strong>Step 6: The widgets\xA0assembly</strong></h2> <p>Yes, it’s in this part that we are going to call our widgets in the main <strong>widget MyHomePage</strong>. We have this after:</p> <p><a href="https://gist.github.com/messaismael/61db2152ac02487a459eae2c59e98345" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <p>In short, we have this at the end 😎!</p> <p><img src="/assets/img/article2/FullSizeRender.gif" alt="final"/></p> <p>You can check the whole project <strong><a href="https://github.com/messaismael/e-commerce-mobile-app" rel="nofollow">here</a></strong></p> <p>Thanks for reading this post, recommend and share if you enjoyed it.</p> <p>Follow me on <strong><a href="https://web.facebook.com/messaismael.dassi/" rel="nofollow">Facebook</a></strong>, <strong><a href="https://twitter.com/MessaIsmael" rel="nofollow">Twitter</a></strong>, <strong><a href="https://www.linkedin.com/in/ismael-messa-abb90a207/" rel="nofollow">LinkedIn</a></strong>.</p>`,1);function j(e){var i=A(),a=r(n(i),14);s(a,()=>`<code class="language-undefined">
...
return Scaffold(
  appBar: AppBar(
    backgroundColor: Colors.white,
    leading: GestureDetector(
      onTap: () &#123;&#125;,
      child: Icon(Icons.menu,size: 30.0,),
    ),
    title: Text(
      &quot;bagzz&quot;,
      style: TextStyle(
        color: Colors.black,
        fontWeight:  FontWeight.w900
      ),
    ),
    titleSpacing: 0,
    actions: &lt;Widget&gt;[
      Padding(padding: EdgeInsets.fromLTRB(15.0, 10.0, 20.0, 10.0),
        child: GestureDetector(
          onTap: () &#123;&#125;,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(15.0),
            child: Image.asset(
              &quot;assets/images/avatar.png&quot;,
              width: 35.0,
              height: 60.0,
              fit: BoxFit.fill,
            ),
          ),
        )
      ),
    ],
  ),
  body: Center(child: Text(&quot;Hello world! &quot;))
);
</code>`,!0),t(a);var l=r(a,40);s(l,()=>`<code class="language-undefined">
class ProductList extends StatelessWidget &#123;
  @override
  Widget build(BuildContext context) &#123;
    return GridView.extent(
      physics: NeverScrollableScrollPhysics(),/*disable internal scroll*/
      shrinkWrap: true,
      maxCrossAxisExtent: 170.0,
      crossAxisSpacing: 10.0,
      mainAxisSpacing: 10.0,
      childAspectRatio: 0.55,/*The key is the childAspectRatio. This value is use to determine the layout in GridView.*/
      children: &lt;Widget&gt;[
        for(var product in products)
          ProductCard(
            name: product.name,
            imageUrl: product.picture
          ),
      ]
    );
  &#125;
&#125;
</code>`,!0),t(l);var u=r(l,10);s(u,()=>`<code class="language-undefined">
name: flutter_app
description: A new Flutter project.
publish_to: &#39;none&#39;
version: 1.0.0+1
environment:
  sdk: &quot;&gt;=2.7.0 &lt;3.0.0&quot;
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
  carousel_slider: 3.0.0

</code>`,!0),t(u);var d=r(u,4);s(d,()=>`<code class="language-undefined">$ flutter  package get</code>`,!0),t(d),c(20),o(e,i)}var M=a({default:()=>F,metadata:()=>N}),N={layout:`post`,date:`2022-03-29`,title:`How to Implement an Uploading Service to S3 using NodeJS and TypeScript`,"gh-repo":`messaismael/upload-s3-service`,"gh-badge":[`fork`,`follow`],"cover-img":`/assets/img/article3/cover.jpg`,"thumbnail-img":`/assets/img/article3/cover.jpg`,tags:[`tutorial`,`awsS3`,`nodeJs`],comments:!0},{layout:ae,date:oe,title:se,"gh-repo":ce,"gh-badge":le,"cover-img":ue,"thumbnail-img":de,tags:fe,comments:pe}=N,P=i(`<p>Last month, I took a cloud computing course in AWS and then successfully passed the <strong>AWS Certified Cloud Practitioner</strong> certification. During this learning journey, I covered many cloud services in AWS, among which was <strong>Amazon s3(Simple Storage Service)</strong>. That’s why I wrote this article which describes in detail how to upload files to an S3 bucket with <strong>NodeJS</strong> and <strong>Typescript</strong>.</p> <p>Before starting, it would be better to introduce <strong>Amazon S3</strong> and present the tools we will use during our learning journey.</p> <p><strong>Amazon Simple Storage Service</strong>(Amazon S3) is a service offered by AWS that’s a scalable, high-speed, web-based storage service. This service is designed for online backup and archiving of data and applications on <strong>AWS</strong>.
As tools that we used the develop this service, we have:</p> <ul><li><strong>AWS SDK</strong></li> <li><strong>Multer</strong></li> <li><strong>Express</strong></li> <li><strong>TypeScript</strong> (I like it 😉)</li></ul> <p>A brief description of our service is that it allows exclusively uploading image files (jpg, png, jpeg) to an Amazon S3 bucket provided.</p> <h2>Create a NodeJS project with TypeScript</h2> <p>Here we will build a nodeJS project firstly and secondly add TypeScript within.</p> <h3>Setup a NodeJs\xA0project</h3> <p>Initialize the project</p> <pre class="language-undefined"></pre> <h3>Configuring runtime</h3> <p>We will use the following dependencies</p> <p><strong>ts-node:</strong> It allows executing TypeScript files directly without precompiling.</p> <p><strong>nodemon:</strong> it will help us to automatically restart our service after file changes in a given directory are detected, and our is the <strong><code>/src</code></strong> directory.</p> <pre class="language-undefined"></pre> <p>create a <strong><code>/nodemon.json</code></strong> file in the root of your project with this code within</p> <pre class="language-javascript"></pre> <h3>Add dependencies</h3> <p>We need some dependencies like <strong>express, dotenv, multer, cors,</strong> and <strong>aws-sdk</strong></p> <pre class="language-undefined"></pre> <h3>Add TypeScript</h3> <p>At this level, we will install <strong>Typescript</strong> then configure the compiler.
Install <strong>TypeScript</strong>, and dependencies</p> <pre class="language-undefined"></pre> <h3>Configuring the TypeScript Compiler</h3> <p>Add <strong><code>/tsconfig.json</code></strong> file with the configs below:</p> <pre class="language-javascript"></pre> <p>A quick explanation of the content is that all <strong>ts</strong> files in the <strong><code>/src</code></strong> directory will be compiled to <strong>js</strong> file into a <strong><code>/build</code></strong> directory, and about the rest of the configs, check the doc <a href="https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html" rel="nofollow">here</a> 😌.</p> <h2>Add node commands and environment variables</h2> <p>Here we will add some custom node commands to our <strong><code>/package.json</code></strong> file. It should look like this:</p> <pre class="language-javascript"></pre> <p>as you can see, we have two custom commands:</p> <p><strong>npm start:</strong> to run our service locally.</p> <p><strong>npm run build:</strong> to build our service into the <strong><code>/build</code></strong> directory for production.</p> <p>Then add the \xA0<strong><code>.env</code></strong> file with the following variables:</p> <pre class="language-javascript"></pre> <p>About <strong>AWS_ACCESS_KEY_ID</strong> and <strong>AWS_SECRET_ACCESS_KEY</strong>, you should have an AWS account. The best practice is to create a new <strong>IAM User</strong> and give it a permission policy (<strong>fullAccessS3</strong>) according to the task you want to perform and get the keys in the <strong>CSV file</strong>.</p> <p>Implement a config file to manage <strong>env</strong> variables</p> <p><strong><code>/src/config/index.ts</code></strong></p> <pre class="language-javascript"></pre> <h2>Implement S3\xA0services</h2> <p>After making this lot of configs, it’s time to go ahead into the TypeScript code 😎. Yeah! There are three <strong>s3</strong> services that we should implement\xA0:</p> <ul><li><strong>checkBucket</strong>: It’s a function that checks if the bucket with the current name has already existed in Amazon S3.</li></ul> <p><strong><code>/src/services/checkBucket.ts</code></strong></p> <pre class="language-javascript"></pre> <ul><li><strong>createBucket</strong>: It’s also a function, but this one creates a bucket in Amazon S3 with the name provided in\xA0<strong><code>.env</code></strong> file in a specific region.</li></ul> <p><strong><code>/src/services/createBucket.ts</code></strong></p> <pre class="language-javascript"></pre> <ul><li><strong>uploadToS3</strong>: That is the core function because the project logic is implemented there (uploading files to Amazon S3🧐).</li></ul> <p><strong><code>/src/services/uploadToS3.ts</code></strong></p> <pre class="language-javascript"></pre> <h2>Implement the controller</h2> <p>Before implementing the controller, we need a function that initializes the bucket.</p> <p>This function must before creating a bucket check if it exists.</p> <p><strong><code>/src/services/index.ts</code></strong></p> <pre class="language-javascript"></pre> <p>Yes! Now we can pass to the controller implementation, and with this part above, it will be pretty easy.</p> <p><strong><code>/src/controllers/index.ts</code></strong></p> <pre class="language-javascript"></pre> <h2>Implement the\xA0Route</h2> <p>It’s here that <code>multer</code> intervenes, which is a node.js middleware for handling <code>multipart/form-data</code>\xA0, used primarily for uploading files. It is written on top of <a href="https://github.com/mscdex/busboy" rel="nofollow">busboy</a> for maximum efficiency.</p> <h4>Config multer storage and fileFilter</h4> <pre class="language-javascript"></pre> <p>now we can implement the route with the <strong>multer middleware</strong>.</p> <p><strong><code>/src/routes/index.ts</code></strong></p> <pre class="language-javascript"></pre> <h3>Create a server with Express</h3> <p><strong><code>/src/index.ts</code></strong></p> <pre class="language-javascript"></pre> <h2>Test the API with\xA0PostMan</h2> <p>Launch the service with the following command</p> <pre class="language-undefined"></pre> <p>After getting the Endpoint from the console, paste it into Postman and provide your file as data like this:</p> <p><img src="/assets/img/article3/img1.png" alt="img1"/></p> <p>and to Amazon S3 you should see the currently uploaded file in the specific bucket name for me is uploadservice:</p> <p><img src="/assets/img/article3/img2.png" alt="img2"/></p> <h2>Conclusion</h2> <p>I hope this article has helped you!</p> <p>The source code is available in this repository on <a href="https://github.com/messaismael/upload-s3-service" rel="nofollow">GitHub</a>.</p>`,1);function F(e){var i=P(),a=r(n(i),18);s(a,()=>`<code class="language-undefined"> $ npm init</code>`,!0),t(a);var l=r(a,10);s(l,()=>`<code class="language-undefined">$ npm i ts-node nodemon --save-dev</code>`,!0),t(l);var u=r(l,4);s(u,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
<span class="token string">"watch"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">"ext"</span><span class="token operator">:</span> <span class="token string">".ts,.js"</span><span class="token punctuation">,</span>
<span class="token string">"ignore"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">"exec"</span><span class="token operator">:</span> <span class="token string">"ts-node ./src/index.ts"</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(u);var d=r(u,6);s(d,()=>`<code class="language-undefined">$ npm i express dotenv multer cors aws-sdk</code>`,!0),t(d);var f=r(d,6);s(f,()=>`<code class="language-undefined">$ npm i @types/cors @types/express @types/multer @types/node typescript --save-dev</code>`,!0),t(f);var p=r(f,6);s(p,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
<span class="token string">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
<span class="token string">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>
<span class="token string">"module"</span><span class="token operator">:</span> <span class="token string">"commonjs"</span><span class="token punctuation">,</span>
<span class="token string">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"es6"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token string">"rootDir"</span><span class="token operator">:</span> <span class="token string">"./src"</span><span class="token punctuation">,</span>  
 <span class="token string">"outDir"</span><span class="token operator">:</span> <span class="token string">"./build"</span><span class="token punctuation">,</span>
<span class="token string">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token string">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token string">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token string">"resolveJsonModule"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(p);var m=r(p,8);s(m,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
<span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"upload-s3-servie"</span><span class="token punctuation">,</span>
<span class="token string">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
<span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"upload file to s3 bucket"</span><span class="token punctuation">,</span>
<span class="token string">"main"</span><span class="token operator">:</span> <span class="token string">"build/index"</span><span class="token punctuation">,</span>
<span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
<span class="token string">"start"</span><span class="token operator">:</span> <span class="token string">"nodemon"</span><span class="token punctuation">,</span>
<span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"rm -r ./build &amp;&amp; tsc"</span><span class="token punctuation">,</span>
<span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo "Error: no test specified" &amp;&amp; exit 1"</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token string">"author"</span><span class="token operator">:</span> <span class="token string">"Ismael Messa"</span><span class="token punctuation">,</span>
<span class="token string">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
<span class="token string">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
<span class="token string">"@types/cors"</span><span class="token operator">:</span> <span class="token string">"^2.8.12"</span><span class="token punctuation">,</span>
<span class="token string">"@types/express"</span><span class="token operator">:</span> <span class="token string">"^4.17.13"</span><span class="token punctuation">,</span>
<span class="token string">"@types/multer"</span><span class="token operator">:</span> <span class="token string">"^1.4.7"</span><span class="token punctuation">,</span>
<span class="token string">"@types/node"</span><span class="token operator">:</span> <span class="token string">"^17.0.21"</span><span class="token punctuation">,</span>  
 <span class="token string">"nodemon"</span><span class="token operator">:</span> <span class="token string">"^2.0.15"</span><span class="token punctuation">,</span>
<span class="token string">"ts-node"</span><span class="token operator">:</span> <span class="token string">"^10.7.0"</span><span class="token punctuation">,</span>
<span class="token string">"typescript"</span><span class="token operator">:</span> <span class="token string">"^4.6.2"</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token string">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
<span class="token string">"aws-sdk"</span><span class="token operator">:</span> <span class="token string">"^2.1095.0"</span><span class="token punctuation">,</span>
<span class="token string">"cors"</span><span class="token operator">:</span> <span class="token string">"^2.8.5"</span><span class="token punctuation">,</span>
<span class="token string">"dotenv"</span><span class="token operator">:</span> <span class="token string">"^16.0.0"</span><span class="token punctuation">,</span>
<span class="token string">"express"</span><span class="token operator">:</span> <span class="token string">"^4.17.3"</span><span class="token punctuation">,</span>
<span class="token string">"multer"</span><span class="token operator">:</span> <span class="token string">"^1.4.4"</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(m);var h=r(m,10);s(h,()=>`<code class="language-javascript"><span class="token constant">PORT</span><span class="token operator">=</span><span class="token number">8080</span>
<span class="token constant">AWS_ACCESS_KEY_ID</span><span class="token operator">=</span>xxxxxxxxxxxx
<span class="token constant">AWS_SECRET_ACCESS_KEY</span><span class="token operator">=</span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
<span class="token constant">BUCKET_NAME</span><span class="token operator">=</span>bucket_name</code>`,!0),t(h);var g=r(h,8);s(g,()=>`<code class="language-javascript"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span><span class="token punctuation">;</span>

dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>

<span class="token operator">-</span> Config file
  <span class="token operator">*</span><span class="token operator">/</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  port<span class="token operator">:</span> number<span class="token punctuation">,</span>
  aws_access_key_id<span class="token operator">:</span> string<span class="token punctuation">,</span>
  aws_secret_access_key<span class="token operator">:</span>string<span class="token punctuation">,</span>
  bucket_name<span class="token operator">:</span> string
  <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  port <span class="token operator">:</span> <span class="token function">Number</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token number">8080</span><span class="token punctuation">,</span>
  aws_access_key_id <span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">AWS_ACCESS_KEY_ID</span> <span class="token operator">??</span> <span class="token string">" "</span><span class="token punctuation">,</span>
  aws_secret_access_key <span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">AWS_SECRET_ACCESS_KEY</span> <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">,</span>
  bucket_name<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BUCKET_NAME</span> <span class="token operator">??</span> <span class="token string">'test-bucket'</span>
  <span class="token punctuation">&#125;</span></code>`,!0),t(g);var _=r(g,10);s(_,()=>`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">S3</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"aws-sdk"</span><span class="token punctuation">;</span>
<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>

<span class="token operator">-</span> @name checkBucket
<span class="token operator">-</span> @param <span class="token punctuation">&#123;</span><span class="token constant">S3</span><span class="token punctuation">&#125;</span> s3
<span class="token operator">-</span> @returns <span class="token punctuation">&#123;</span>Promise<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span>success<span class="token operator">:</span>boolean<span class="token punctuation">;</span> message<span class="token operator">:</span> string<span class="token punctuation">;</span> data<span class="token operator">:</span>string<span class="token punctuation">;</span><span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">&#125;</span>
  <span class="token operator">*</span><span class="token operator">/</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkBucket</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">s3<span class="token operator">:</span> <span class="token constant">S3</span><span class="token punctuation">,</span> bucket<span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">headBucket</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>Bucket<span class="token operator">:</span> bucket<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Bucket already Exist"</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>$response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"Bucket already Exist"</span><span class="token punctuation">,</span>data<span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Error bucket don't exsit"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> success<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"Error bucket don't exsit"</span><span class="token punctuation">,</span>data<span class="token operator">:</span> error <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,!0),t(_);var v=r(_,6);s(v,()=>`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">S3</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'aws-sdk'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CreateBucketRequest <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'aws-sdk/clients/s3'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">"../config"</span><span class="token punctuation">;</span>

<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>

<span class="token operator">-</span> @name createBucket
<span class="token operator">-</span> @param <span class="token punctuation">&#123;</span><span class="token constant">S3</span><span class="token punctuation">&#125;</span> s3
<span class="token operator">-</span> @returns <span class="token punctuation">&#123;</span>Promise<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span>success<span class="token operator">:</span>boolean<span class="token punctuation">;</span> message<span class="token operator">:</span> string<span class="token punctuation">;</span> data<span class="token operator">:</span> string<span class="token punctuation">;</span><span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">&#125;</span>
  <span class="token operator">*</span><span class="token operator">/</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createBucket</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">s3<span class="token operator">:</span> <span class="token constant">S3</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

<span class="token keyword">const</span> params<span class="token operator">:</span> CreateBucketRequest <span class="token operator">=</span> <span class="token punctuation">&#123;</span> Bucket<span class="token operator">:</span> config<span class="token punctuation">.</span>bucket_name<span class="token punctuation">,</span>
CreateBucketConfiguration<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
<span class="token comment">// Set your region here</span>
LocationConstraint<span class="token operator">:</span> <span class="token string">"ap-south-1"</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">createBucket</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Bucket Created Successfull"</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>Location<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"Bucket Created Successfull"</span><span class="token punctuation">,</span>data<span class="token operator">:</span> res<span class="token punctuation">.</span>Location<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Error: Unable to create bucket &#92;n"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>success<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"Unable to create bucket"</span><span class="token punctuation">,</span> data<span class="token operator">:</span> error<span class="token punctuation">&#125;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(v);var y=r(v,6);s(y,()=>`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">S3</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"aws-sdk"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">"../config"</span><span class="token punctuation">;</span>

<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>

<span class="token operator">-</span> @name uploadToS3
<span class="token operator">-</span> @param <span class="token punctuation">&#123;</span><span class="token constant">S3</span><span class="token punctuation">&#125;</span> s3
<span class="token operator">-</span> @param <span class="token punctuation">&#123;</span>File<span class="token punctuation">&#125;</span> fileData
<span class="token operator">-</span> @returns <span class="token punctuation">&#123;</span>Promise<span class="token operator">&lt;</span><span class="token punctuation">&#123;</span>success<span class="token operator">:</span>boolean<span class="token punctuation">;</span> message<span class="token operator">:</span> string<span class="token punctuation">;</span> data<span class="token operator">:</span> object<span class="token punctuation">;</span><span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token punctuation">&#125;</span>
  <span class="token operator">*</span><span class="token operator">/</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">uploadToS3</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">s3<span class="token operator">:</span> <span class="token constant">S3</span><span class="token punctuation">,</span> fileData<span class="token operator">?</span><span class="token operator">:</span> Express<span class="token punctuation">.</span>Multer<span class="token punctuation">.</span>File</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> fileContent <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>fileData<span class="token operator">!</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        Bucket<span class="token operator">:</span> config<span class="token punctuation">.</span>bucket_name<span class="token punctuation">,</span>
        Key<span class="token operator">:</span> fileData<span class="token operator">!</span><span class="token punctuation">.</span>originalname<span class="token punctuation">,</span>
        Body<span class="token operator">:</span> fileContent
      <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

      <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> s3<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"File Uploaded with Successfull"</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>Location<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"File Uploaded with Successfull"</span><span class="token punctuation">,</span> data<span class="token operator">:</span> res<span class="token punctuation">.</span>Location<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>success<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"Unable to Upload the file"</span><span class="token punctuation">,</span> data<span class="token operator">:</span> error<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>

  <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>success<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"Unalbe to access this file"</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span></code>`,!0),t(y);var b=r(y,10);s(b,()=>`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">S3</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'aws-sdk'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> checkBucket <span class="token keyword">from</span> <span class="token string">'./checkBucket'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createBucket <span class="token keyword">from</span> <span class="token string">'./createBucket'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">"../config"</span><span class="token punctuation">;</span>

<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>

<span class="token operator">-</span> @name initBucket
<span class="token operator">-</span> @returns <span class="token punctuation">&#123;</span><span class="token keyword">void</span><span class="token punctuation">&#125;</span>
  <span class="token operator">*</span><span class="token operator">/</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">initBucket</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">s3<span class="token operator">:</span> <span class="token constant">S3</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> bucketStatus <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">checkBucket</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> config<span class="token punctuation">.</span>bucket_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>bucketStatus<span class="token punctuation">.</span>success <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// check if the bucket don't exist</span>
<span class="token keyword">let</span> bucket <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createBucket</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// create new bucket</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bucket<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(b);var x=r(b,6);s(x,()=>`<code class="language-javascript"><span class="token keyword">import</span> initBucket <span class="token keyword">from</span> <span class="token string">"../services"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> <span class="token constant">S3</span> <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'aws-sdk'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Request <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"express"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> uploadToS3 <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"../services/uploadToS3"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">"../config"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UploadController</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">static</span> <span class="token function-variable function">Upload</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

    <span class="token keyword">const</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">S3</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      accessKeyId<span class="token operator">:</span> config<span class="token punctuation">.</span>aws_access_key_id<span class="token punctuation">,</span>
      secretAccessKey<span class="token operator">:</span> config<span class="token punctuation">.</span>aws_secret_access_key<span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Initialize bucket</span>
    <span class="token keyword">await</span> <span class="token function">initBucket</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// get file data through req.file thank to multer</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"file stobject"</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>file<span class="token punctuation">)</span>

    <span class="token keyword">const</span> uplaodRes <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">uploadToS3</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> req<span class="token punctuation">.</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>uplaodRes<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>uplaodRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>uplaodRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(x);var S=r(x,8);s(S,()=>`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Request <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"express"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> multer<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> FileFilterCallback <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"multer"</span><span class="token punctuation">;</span>

type <span class="token function-variable function">FileNameCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token operator">:</span> Error <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> filename<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> multerConfig <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
storage <span class="token operator">:</span> multer<span class="token punctuation">.</span><span class="token function">diskStorage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
destination<span class="token operator">:</span> <span class="token string">'uploads/'</span><span class="token punctuation">,</span>
<span class="token function-variable function">filename</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token operator">:</span> Request<span class="token punctuation">,</span> file<span class="token operator">:</span> Express<span class="token punctuation">.</span>Multer<span class="token punctuation">.</span>File<span class="token punctuation">,</span> cb<span class="token operator">:</span> FileNameCallback</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
<span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>originalname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token function-variable function">fileFilter</span> <span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token operator">:</span> Request<span class="token punctuation">,</span> file<span class="token operator">:</span> Express<span class="token punctuation">.</span>Multer<span class="token punctuation">.</span>File<span class="token punctuation">,</span> cb<span class="token operator">:</span> FileFilterCallback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>mimetype <span class="token operator">===</span> <span class="token string">"image/jpeg"</span> <span class="token operator">||</span> file<span class="token punctuation">.</span>mimetype <span class="token operator">===</span> <span class="token string">"image/png"</span> <span class="token operator">||</span> file<span class="token punctuation">.</span>mimetype <span class="token operator">===</span> <span class="token string">"image/jpg"</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(S);var C=r(S,6);s(C,()=>`<code class="language-javascript"><span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> multer <span class="token keyword">from</span> <span class="token string">'multer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> UploadController <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'../controllers'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> multerConfig <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'../config/multerConfig'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span>multerConfig<span class="token punctuation">.</span>fileFilter<span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/upload"</span><span class="token punctuation">,</span> upload<span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">'uploaded_file'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> UploadController<span class="token punctuation">.</span>Upload<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> router <span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,!0),t(C);var w=r(C,6);s(w,()=>`<code class="language-javascript"><span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">"express"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cors <span class="token keyword">from</span> <span class="token string">"cors"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> router <span class="token keyword">as</span> Router <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"./routes"</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">"./config"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> port <span class="token operator">=</span> config<span class="token punctuation">.</span>port<span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Enable all cors requests for all routes</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> limit<span class="token operator">:</span> <span class="token string">'50000mb'</span><span class="token punctuation">,</span> extended<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// user route for all path</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>message<span class="token operator">:</span> <span class="token string">'Upload S3 Service is ready'</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Resource Not Found"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Server is listening on port</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>port<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&#92;nYou can access via http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>port<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,!0),t(w);var T=r(w,6);s(T,()=>`<code class="language-undefined">$ npm start</code>`,!0),t(T),c(14),o(e,i)}var I=a({default:()=>H,metadata:()=>L}),L={layout:`post`,date:`2022-04-11`,title:`How to Build an Email Sending Service with Serverless in\xA0AWS`,subtitle:`Send Email using AWS SES`,"cover-img":`/assets/img/article4/cover.jpg`,"thumbnail-img":`/assets/img/article4/cover.jpg`,tags:[`tutorial`,`awsLambda`,`awsSES`,`nodeJS`],comments:!0},{layout:R,date:z,title:B,subtitle:me,"cover-img":he,"thumbnail-img":ge,tags:_e,comments:ve}=L,V=i(`<p>Sometimes when you have a web application or page, the users or visitors may want to contact you. For this, instead of leaving your email on your platform, you can provide the best user experience for users by giving them a specific page that could simplify the process.</p> <p>This is where the email sending service intervenes, which is a service that uses serverless compute (<strong>AWS Lambda</strong>) and <strong>AWS SES</strong> (Simple Email Service). So with serverless, you don’t take care of the underlying compute resources, you just focus on writing your source code, and with <strong>AWS SES</strong> it makes the process easy and quick to implement.</p> <p>In short, this article describes in detail how to implement an email sending service quickly and securely🙂.</p> <h2>Set up a node\xA0Project</h2> <h3>1. Initialize</h3> <pre class="language-undefined"></pre> <h3>2. Install dependencies</h3> <pre class="language-undefined"></pre> <h3>3. Configure Typescript</h3> <p>Add <strong><code>/tsconfig.json</code></strong> file with the configs below:</p> <pre class="language-javascript"></pre> <h2>Configure Claudia</h2> <p><strong>Claudia</strong> is a tool that automates the deployment of AWS Lambda functions written in JavaScript and associated API Gateway configurations. It provides reasonable defaults, and it allows to get started quickly with Lambda-based microservices.</p> <p>But we will use <strong>Claudia API Builder</strong> which is an extension library for Claudia.js, it allows us to use API Gateway as if were a lightweight JavaScript web server.</p> <h3>1. Add\xA0policy</h3> <p><strong>A policy</strong> is an object in AWS that, when associated with an entity or resource, defines its permissions. The following policy permits us to send simple emails and raw emails with the <strong>SES</strong> service.</p> <p><strong><code>/policies/send-email.json</code></strong></p> <pre class="language-javascript"></pre> <h3>2. Define Environment variables</h3> <p>Here we will manage environment variables in <strong><code>/env.json</code></strong> file, these variables will be available directly in configurations of our Lambda function.</p> <p>According to the environment (production, development), you can set <strong><code>/prod.json</code></strong> and <strong><code>/dev.json</code></strong> files.</p> <pre class="language-undefined"></pre> <p>Then with the <strong><code>/src/config/index.ts</code></strong> we will export these variables throughout the entirety of our project.</p> <pre class="language-undefined"></pre> <h3>3. Add the type of claudia-api-builder</h3> <p>At the time of writing this article, there was no yet declaration file in <code>@types</code> repository for Claudia API Builder, so let’s create our own in the project folder <strong><code>/@types/claudia-api-builder/index.d.ts</code></strong> with this as content:</p> <pre class="language-javascript"></pre> <h3>4. Add custom node\xA0Commands</h3> <p>To perform our actions in our project we have 4 commands for this</p> <ul><li><strong>npm run create</strong>\xA0: to create our function in AWS Lambda.</li> <li><strong>npm run deploy:dev</strong>\xA0: to upload local changes to AWS Lambda of course for the development version.</li> <li><strong>npm run deploy:prod</strong>\xA0: to upload local changes to AWS Lambda for the production version.</li> <li><strong>npm run delete</strong>\xA0: to delete our function.</li></ul> <p>the <strong><code>/package.json</code></strong> should look like this:</p> <pre class="language-undefined"></pre> <h2>Implement the sending\xA0Service</h2> <p>This service uses the <strong>AWS-SDK</strong> module to perform this task in question and makes the process easier. The <strong><code>/src/sesSend.ts</code></strong> file implements this logic:</p> <p><a href="https://gist.github.com/messaismael/6e5e58338fbbda730e9ba85b79c4ddc5" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <h2>Implement the\xA0Route</h2> <p><strong><code>/src/index.ts</code></strong></p> <p><a href="https://gist.github.com/messaismael/7e811097f790ab32ede7a0d21c225eb6" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <h2>Test</h2> <p>To test we will use Postman, before going ahead and using this there are some configs to make according to the environment to use AWS SES:</p> <ul><li><strong>Dev</strong> : to send an email from a sender email to a recipient email, you need to verify both email addresses first using <a href="https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html" rel="nofollow">Verified identities in Amazon SES</a>.</li> <li><strong>Prod</strong> : in production, the idea is to allow any email address to send emails to any recipient’s email address. Enabling this implies <a href="https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html" rel="nofollow">Moving out of the Amazon SES sandbox</a>.</li></ul> <p>now let’s go to PostMan:</p> <p><img src="/assets/img/article4/img1.png" alt="img1"/></p> <p>and in your inbox, you should receive an email like this:</p> <p><img src="/assets/img/article4/img2.png" alt="img2"/></p> <h2>Conclusion</h2> <p>To summarize, this article covered step-by-step instructions on how I implemented an email sending service using nodeJS. If it helped you, let me a <strong>clap</strong>/<strong>like</strong>/<strong>share</strong> Thank you 😉.</p> <p>The original repository is available <a href="https://github.com/messaismael/send-email-service" rel="nofollow">here</a>.</p>`,1);function H(e){var i=V(),a=r(n(i),10);s(a,()=>`<code class="language-undefined">$ npm init</code>`,!0),t(a);var l=r(a,4);s(l,()=>`<code class="language-undefined">$ npm i typescript aws-sdk claudia-api-builder

$ npm i @types/node --save-dev</code>`,!0),t(l);var u=r(l,6);s(u,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
<span class="token string">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
<span class="token string">"outDir"</span><span class="token operator">:</span> <span class="token string">"./build"</span><span class="token punctuation">,</span>
<span class="token string">"rootDir"</span><span class="token operator">:</span> <span class="token string">"./src"</span><span class="token punctuation">,</span>
<span class="token string">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"esnext"</span><span class="token punctuation">,</span> <span class="token string">"dom"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">"target"</span><span class="token operator">:</span> <span class="token string">"es6"</span><span class="token punctuation">,</span>
<span class="token string">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token string">"allowSyntheticDefaultImports"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token string">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token string">"module"</span><span class="token operator">:</span> <span class="token string">"commonjs"</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(u);var d=r(u,14);s(d,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
<span class="token string">"Version"</span><span class="token operator">:</span> <span class="token string">"2012-10-17"</span><span class="token punctuation">,</span>
<span class="token string">"Statement"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">&#123;</span>
<span class="token string">"Effect"</span><span class="token operator">:</span> <span class="token string">"Allow"</span><span class="token punctuation">,</span>
<span class="token string">"Action"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token string">"ses:SendEmail"</span><span class="token punctuation">,</span>
<span class="token string">"ses:SendRawEmail"</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">"Resource"</span><span class="token operator">:</span> <span class="token string">"*"</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(d);var f=r(d,8);s(f,()=>`<code class="language-undefined">&#123;
  &quot;NODE_ENV&quot;: &quot;dev&quot;,
  &quot;TO_EMAILS&quot;: &quot;exampleEmail@gmail.com&quot;
&#125;</code>`,!0),t(f);var p=r(f,4);s(p,()=>`<code class="language-undefined">/**
  * Config file
*/

export const ENV = process.env.NODE_ENV || &#39;dev&#39;;
export const TO_EMAILS = (process.env.TO_EMAILS || &#39;&#39;).split(&#39;,&#39;);</code>`,!0),t(p);var m=r(p,6);s(m,()=>`<code class="language-javascript">declare module <span class="token string">'claudia-api-builder'</span><span class="token punctuation">&#123;</span>
<span class="token keyword">class</span> <span class="token class-name">ApiResponse</span><span class="token punctuation">&#123;</span>
<span class="token keyword">public</span> <span class="token function">constructor</span><span class="token punctuation">(</span>response <span class="token operator">:</span> any<span class="token punctuation">,</span> headers <span class="token operator">:</span> any<span class="token punctuation">,</span> code<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">ApiBuilder</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> ApiResponse <span class="token operator">:</span> <span class="token keyword">typeof</span> ApiResponse<span class="token punctuation">;</span>
<span class="token function">get</span><span class="token punctuation">(</span>uri <span class="token operator">:</span> string<span class="token punctuation">,</span> callback <span class="token operator">:</span> Function<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token function">put</span><span class="token punctuation">(</span>uri <span class="token operator">:</span> string<span class="token punctuation">,</span> callback <span class="token operator">:</span> Function<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token function">post</span><span class="token punctuation">(</span>uri <span class="token operator">:</span> string<span class="token punctuation">,</span> callback <span class="token operator">:</span> Function<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,!0),t(m);var h=r(m,10);s(h,()=>`<code class="language-undefined">...
  &quot;description&quot;: &quot;A lambda function that send email using aws ses&quot;,
  &quot;main&quot;: &quot;build/index&quot;,
  &quot;files&quot;: [
    &quot;build/**/*.*&quot;,
    &quot;package.json&quot;
  ],
  &quot;scripts&quot;: &#123;
    &quot;create&quot;: &quot;tsc &amp;&amp; claudia create --api-module build/index --region us-east-1 --set-env-from-json env.json --policies policies&quot;,
    &quot;deploy:dev&quot;: &quot;tsc &amp;&amp; claudia update --version dev --set-env-from-json dev.json&quot;,
    &quot;deploy:prod&quot;: &quot;tsc &amp;&amp; claudia update --version prod --set-env-from-json prod.json&quot;,
    &quot;delete&quot;: &quot;claudia destroy&quot;,
    &quot;test&quot;: &quot;echo &quot;Error: no test specified&quot; &amp;&amp; exit 1&quot;
  &#125;,
  &quot;author&quot;: &quot;Ismael Messa&quot;,
...</code>`,!0),t(h),c(32),o(e,i)}var U=a({default:()=>K,metadata:()=>W}),W={layout:`post`,date:`2022-08-15`,title:`Improve Email Sending with Amazon SQS and\xA0DynamoDB`,subtitle:`Build a scalable email sending with AWS cloud computing`,"gh-repo":`messaismael/scalable-send-email-service`,"cover-img":`/assets/img/article5/cover.jpeg`,"thumbnail-img":`/assets/img/article5/cover.jpeg`,tags:[`tutorial`,`awsLambda`,`awsSQS`,`awsDynamoDB`,`nodeJs`],comments:!0},{layout:ye,date:be,title:xe,subtitle:Se,"gh-repo":Ce,"cover-img":we,"thumbnail-img":Te,tags:Ee,comments:De}=W,G=i(`<p>In this article, we will talk about email sending which we already covered in the last <a href="https://messaismael.medium.com/build-an-email-sending-service-with-aws-lambda-bcf522199f1b" rel="nofollow">article</a>. But this one is an improvement over the last, the principal objective is to allow email sending while handling the risk of failure during the process, for this, we introduce the notion of <strong>Queue</strong> with <strong>Amazon SQS</strong> and <strong>DynamoDB</strong>.</p> <p><strong>Amazon SQS</strong> (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Using <strong>SQS</strong>, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.</p> <p><strong>Amazon DynamoDB</strong> is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data export tools.</p> <h2>Project structure</h2> <p>Having a good starting point when it comes to our project architecture is vital for the project itself and how you will be able to tackle changing needs in the future.</p> <p>Amazon SQS allows us to send data in the queue as messages and pull these messages. It offers two types of message queues. Standard queues offer maximum throughput, best-effort ordering, and at least-once delivery. SQS FIFO(First In First Out) queues are designed to guarantee that messages are processed exactly once, in the exact order they are sent.</p> <p>In our case, we’ll first use a standard queue because it allows a nearly unlimited number of transactions per second. Unlike FIFO, this queue doesn’t guarantee that the message is delivered exactly once, that is why we used Amazon Dyanmodb to store the state of our messages and know if a message has already been delivered or not. So to do this we structured it as follows:</p> <ul><li><strong>Send_service</strong>: A microservice that allows sending email data as messages in the queue and saving that message to Dynamodb.</li> <li><strong>Receive_service</strong>: A microservice that pulls messages and checks their status before processing them.</li></ul> <p>Both are <strong>Lambda functions</strong> powered by <strong>ClaudiaJs</strong> and set up like <a href="https://messaismael.medium.com/build-an-email-sending-service-with-aws-lambda-bcf522199f1b" rel="nofollow">here</a>.</p> <h2>Send_service</h2> <p>The primary purpose of this microservice is to send email data as a message in the queue that it creates if it doesn’t exist. To achieve this, the following steps have been necessary.</p> <pre class="language-undefined"></pre> <h3>1. Add policies</h3> <p>Below we have the policy which gives the correct permissions for our service that allow it to create a queue, send messages and add data to a DynamoDB table.</p> <p><strong><code>/send_service/policies/policies.json</code></strong></p> <pre class="language-undefined"></pre> <h3>2. Create a table and queue</h3> <p>If you haven’t a DynamoDB table and SQS queue created yet, the following instructions will help you to get them using AWS CLI.</p> <pre class="language-undefined"></pre> <p>They will allow us to use\xA0<code>.env</code> variables in the <code>package.json</code> file</p> <p><a href="https://www.genui.com/resources/env-variables-json" rel="nofollow">https://www.genui.com/resources/env-variables-json</a></p> <p>Now we will add in the <code>.env</code> file the table and the queue name like below:</p> <p><code>/send_service/.env</code></p> <pre class="language-undefined"></pre> <p>then add these scripts in the <code>package.json</code></p> <pre class="language-undefined"></pre> <h3>3. Environment variables</h3> <p><code>/send_service/env.json</code></p> <pre class="language-undefined"></pre> <h3>4.Send a Message</h3> <p><code>/send_service/src/sqs/index.ts</code></p> <p><a href="https://gist.github.com/messaismael/c397716f21fee87394df15d898b30e45" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <p>About the parameters, you can see them <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html" rel="nofollow">here</a>.</p> <h3>5. Send Message Service</h3> <p>This is where we send the message in the queue and save the message status in DynamoDB Table. The code below is the result:</p> <p><code>/send_service/src/service/index.ts</code></p> <p><a href="https://gist.github.com/messaismael/9850e3f28dfcf3e35bc5a32654aadcf2" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <h2>Receive_service</h2> <p>To receive a message it is necessary that the function is triggered, for that we used <a href="https://claudiajs.com/news/2018/07/19/claudia-5.1.html" rel="nofollow">SQS Triggers</a> to wire up a Lambda to an SQS queue.</p> <pre class="language-undefined"></pre> <h3>1. Add policies</h3> <p><strong><code>/receive_service/policies/policies.json</code></strong></p> <p><a href="https://gist.github.com/messaismael/104cee0b6d9fd6e5c08626c0ec01907f" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <p>These policies allow sending emails with Amazon SES, getting queue URLs, receiving and deleting messages with Amazon SQS, getting items, and updating items with Amazon DynamoDB.</p> <h3>2. Environment variables</h3> <p><code>/receive_service/env.json</code></p> <pre class="language-undefined"></pre> <h3>3. Set up SQS event triggers</h3> <p>In the <code>receive_service/</code> install these dependencies as we have seen above:</p> <pre class="language-undefined"></pre> <p>Yeah! Now we will use the <a href="https://github.com/claudiajs/claudia/blob/master/docs/add-sqs-event-source.md" rel="nofollow">add-sqs-event-source</a> command, and specify the queue name or ARN with <code>--queue</code> to add the trigger, for that we will add a new script in the <code>package.json</code> and add\xA0<code>.env</code> file with the content below:</p> <p><code>/receive_service/.env</code></p> <pre class="language-undefined"></pre> <p><code>/receive_service/package.json</code></p> <pre class="language-undefined"></pre> <p><img src="/assets/img/article5/add-trigger.png" alt="img2"/></p> <h3>4. Send email</h3> <p><code>/receive_service/src/ses/index.ts</code></p> <p><a href="https://gist.github.com/messaismael/6e5e58338fbbda730e9ba85b79c4ddc5" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <h3>5. Delete a message</h3> <p><code>/receive_service/src/delete_msg.ts</code></p> <p><a href="https://gist.github.com/messaismael/493336e958b1a91c979ee2cb23208d87" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <h3>6. Handler</h3> <p>This is where we call the functions that intervene in the processing</p> <p><code>/receive_service/src/index.ts</code></p> <p><a href="https://gist.github.com/messaismael/3a99deebd3a0bb1326b09f12bbb78ee0" rel="nofollow">View code snippet on GitHub Gist ↗</a></p> <p>When this function is called, it retrieves messages in the <code>Record</code> property of the <code>event</code> object. Then for each message, it first checks the status of the message in the table before sending an email. When sending is successful, the message status is updated then the message is deleted from the queue.</p> <h2>Deploy</h2> <p>To execute properly this project, you must follow this <a href="https://github.com/messaismael/scalable-send-email-service#deploy" rel="nofollow">README</a> step by step.</p> <br/> <br/> <p>Thank for reading, if it was helpful to you let me know 🙂!</p>`,1);function K(e){var i=G(),a=r(n(i),22);s(a,()=>`<code class="language-undefined">$ mkdir scalable_email_sending
$ cd scalable_email_sending // the main directory
$ mkdir send_service receive_service
$ cd send_service</code>`,!0),t(a);var l=r(a,8);s(l,()=>`<code class="language-undefined">&#123;
  &quot;Version&quot;: &quot;2012-10-17&quot;,
  &quot;Statement&quot;: [&#123;
    &quot;Effect&quot;: &quot;Allow&quot;,
    &quot;Action&quot;: [
      &quot;sqs:CreateQueue&quot;,
      &quot;sqs:SendMessage&quot;
    ],
    &quot;Resource&quot;: &quot;*&quot;
  &#125;,
  &#123;
    &quot;Effect&quot;: &quot;Allow&quot;,
    &quot;Action&quot;: [
      &quot;dynamodb:PutItem&quot;
    ],
    &quot;Resource&quot;: &quot;*&quot;
  &#125;]
&#125;</code>`,!0),t(l);var u=r(l,6);s(u,()=>`<code class="language-undefined">$ npm i cross-var dotenv-cli</code>`,!0),t(u);var d=r(u,10);s(d,()=>`<code class="language-undefined">QUEUE_NAME=email_queue
TABLE_NAME=sqsmessagedb</code>`,!0),t(d);var f=r(d,4);s(f,()=>`<code class="language-undefined">...
&quot;create:queue&quot;: &quot;dotenv -- cross-var aws sqs create-queue --queue-name %QUEUE_NAME% --attributes DelaySeconds=60,MessageRetentionPeriod=86400&quot;,

&quot;create:table&quot;: &quot;dotenv -- cross-var aws dynamodb create-table  --table-name %TABLE_NAME%  --attribute-definitions AttributeName=messageId,AttributeType=S  --key-schema AttributeName=messageId,KeyType=HASH  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1  --region us-east-1  --query TableDescription.TableArn  --output text&quot;,
...</code>`,!0),t(f);var p=r(f,6);s(p,()=>`<code class="language-undefined">&#123;
  &quot;NODE_ENV&quot;: &quot;dev&quot;,
  &quot;QUEUE_URL&quot;: &quot;https://XXXXXX/email-queue&quot;,
  &quot;TABLE_NAME&quot;: &quot;sqsmessagedb&quot;
&#125;</code>`,!0),t(p);var m=r(p,22);s(m,()=>`<code class="language-undefined">$ cd receive_service</code>`,!0),t(m);var h=r(m,14);s(h,()=>`<code class="language-undefined">&#123;
    &quot;NODE_ENV&quot;: &quot;dev&quot;,
    &quot;TO_EMAILS&quot;: &quot;email@gmail.com&quot;,
    &quot;QUEUE_URL&quot;: &quot;https://XXXXXX/email-queue&quot;,
    &quot;TABLE_NAME&quot;: &quot;sqsmessagedb&quot;
&#125;</code>`,!0),t(h);var g=r(h,6);s(g,()=>`<code class="language-undefined">$ npm i cross-var dotenv-cli</code>`,!0),t(g);var _=r(g,6);s(_,()=>`<code class="language-undefined">QUEUE_NAME=email_queue</code>`,!0),t(_);var v=r(_,4);s(v,()=>`<code class="language-undefined">...
&quot;scripts&quot;: &#123;
    ...,
    &quot;add:trigger&quot;: &quot;dotenv -- cross-var claudia add-sqs-event-source --queue %QUEUE_NAME%&quot;,
    ...&quot;
&#125;,
...</code>`,!0),t(v),c(34),o(e,i)}var q=a({default:()=>Z,metadata:()=>J}),J={layout:`post`,date:`2023-08-02`,title:`Deploy a React App on S3 with CDK using\xA0python`,subtitle:`Hosting a static App using Amazon S3`,"gh-repo":`messaismael/react-app-cdk`,"cover-img":`/assets/img/article6/cover.jpeg`,"thumbnail-img":`/assets/img/article6/cover.jpeg`,tags:[`tutorial`,`awsS3`,`awsCDK`,`python`],comments:!0},{layout:Oe,date:ke,title:Ae,subtitle:je,"gh-repo":Y,"cover-img":Me,"thumbnail-img":Ne,tags:Pe,comments:Fe}=J,X=i(`<h2>Introduction</h2> <p>In today’s technology-driven world, web applications have become integral to businesses. With the increasing demand for web applications, developers are constantly looking for efficient and easy ways to deploy their applications. AWS provides an easy-to-use framework for deploying web applications using S3 and a modern programming language of your choice. In this article, we will explore how to deploy a React app on S3 with CDK using Python. I will walk you through the steps required to set up your environment and deploy your React app on AWS.</p> <p><strong>AWS Cloud Development Kit (AWS CDK)</strong> is a framework that lets you use modern programming languages to easily define, manage, provision, and deploy cloud infrastructure resources using AWS CloudFormation.</p> <h3>Prerequisites</h3> <ul><li>AWS CDK installed</li> <li><a href="https://blog.numericaideas.com/configure-aws-cli" rel="nofollow">AWS Account with AWS CLI credentials configured</a></li> <li>Python 3.8 installed</li></ul> <h2>Initialize a CDK\xA0project</h2> <p>To initialize a CDK project with Python, you must follow this:</p> <pre class="language-shell"></pre> <p>Once these commands are well executed, in the directory <code>react-app-cdk</code>, we will have the file structure of a CDK project with Python.</p> <p><img src="/assets/img/article6/img1.png" alt="Project structure"/></p> <p>Let’s take a look at some important files you must know\xA0:</p> <ul><li><code>react_app_cdk_stack.py</code>: as its name indicated it’s here where we are going to define the stack of our project. A <strong>Stack</strong> is a collection of AWS resources that you can manage as a single unit on AWS CloudFormation.</li> <li><code>app.py</code>: it’s where our CDK app and Stack are instantiated.</li> <li><code>cdk.json</code>: is a configuration file that specifies options for the AWS CloudFormation stack that will be created by the CDK. Ex: you can specify which files to track changes or not when you make updates, and tell the CDK CLI how to execute our code.</li></ul> <h3>Create a React\xA0project</h3> <p>After setting up our CDK app, now you can create the React app in the route folder of our CDK project.</p> <pre class="language-shell"></pre> <p>The next step is to build the React app</p> <pre class="language-shell"></pre> <p>It will create a build folder containing a production build of our app that we will upload on S3 in the next step.</p> <p><img src="/assets/img/article6/img2.png" alt="Project structure after build"/></p> <h2>Config AWS S3\xA0RESOURCE</h2> <p>In this step, we are going to set up a s3 bucket to host our react app as a static website. This resource is useful to learn more about <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html" rel="nofollow">Hosting a static website using Amazon S3</a>, the steps are described using the AWS console. We going to make that using code from the <code>react_app_cdk_stack.py</code> file.</p> <h3>Create a S3\xA0Bucket</h3> <p>We will create a s3 bucket, configure it to be accessible through the internet, and specify the entry point of our website:</p> <pre class="language-python"></pre> <h3>Upload the app code into our\xA0bucket</h3> <pre class="language-python"></pre> <p>After adding these configurations to our stack the next step is to check if everything is correct by synthesizing the CloudFormation template for this code\xA0:</p> <pre class="language-shell"></pre> <h2>Deploy and\xA0Test</h2> <pre class="language-shell"></pre> <p>Get the URL from outputs of the console and open it in a browser.
The whole project is available <a href="https://github.com/messaismael/react-app-cdk" rel="nofollow">Here</a>.</p> <h2>Conclusion</h2> <p>In summary, deploying a React app on S3 with CDK using Python is a simple process that allows developers to easily create and manage infrastructure as code. By leveraging AWS’s power, developers can easily host static websites and web applications while benefiting from scalability and reliability. This is a valuable skill for any developer looking to deploy their React app on AWS.</p> <p>Thanks for reading, I’m open to any suggestions, if this was helpful let me know!</p>`,1);function Z(e){var i=X(),a=r(n(i),14);s(a,()=>`<code class="language-shell">$ <span class="token function">mkdir</span> react-app-cdk  <span class="token comment">#The name of the folder will determine the name of your project</span>
$ <span class="token builtin class-name">cd</span> react-app-cdk
$ cdk init app <span class="token parameter variable">--language</span> python</code>`,!0),t(a);var l=r(a,14);s(l,()=>`<code class="language-shell">$ npx create-react-app my-app <span class="token parameter variable">--template</span> typescript
$ <span class="token builtin class-name">cd</span> my-app</code>`,!0),t(l);var u=r(l,4);s(u,()=>`<code class="language-shell">$ <span class="token function">npm</span> run build</code>`,!0),t(u);var d=r(u,14);s(d,()=>`<code class="language-python">bucket <span class="token operator">=</span> aws_s3<span class="token punctuation">.</span>Bucket<span class="token punctuation">(</span>
    self<span class="token punctuation">,</span>
    <span class="token string">"ReactBucket"</span><span class="token punctuation">,</span>
    bucket_name<span class="token operator">=</span><span class="token string">"react-bucket"</span><span class="token punctuation">,</span>
    public_read_access<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    block_public_access<span class="token operator">=</span>aws_s3<span class="token punctuation">.</span>BlockPublicAccess<span class="token punctuation">(</span>
        block_public_acls<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
        block_public_policy<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
        ignore_public_acls<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
        restrict_public_buckets<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    access_control<span class="token operator">=</span>aws_s3<span class="token punctuation">.</span>BucketAccessControl<span class="token punctuation">.</span>BUCKET_OWNER_FULL_CONTROL<span class="token punctuation">,</span>
    website_index_document<span class="token operator">=</span><span class="token string">"index.html"</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span></code>`,!0),t(d);var f=r(d,4);s(f,()=>`<code class="language-python">aws_s3_deployment<span class="token punctuation">.</span>BucketDeployment<span class="token punctuation">(</span>
    self<span class="token punctuation">,</span>
    <span class="token string">"ReactAppStaticWebsite"</span><span class="token punctuation">,</span>
    sources<span class="token operator">=</span><span class="token punctuation">[</span>s3_deployment<span class="token punctuation">.</span>Source<span class="token punctuation">.</span>asset<span class="token punctuation">(</span><span class="token string">"./my-app/build"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment"># The path to the build folder</span>
    destination_bucket<span class="token operator">=</span>bucket<span class="token punctuation">,</span>
<span class="token punctuation">)</span></code>`,!0),t(f);var p=r(f,4);s(p,()=>`<code class="language-shell">$ cdk synth</code>`,!0),t(p);var m=r(p,4);s(m,()=>`<code class="language-shell">$ cdk deploy</code>`,!0),t(m),c(8),o(e,i)}var Q=Object.entries(Object.assign({"/src/lib/posts/2020-05-29-how-to-run-a-React-app-with-ElectronJS.md":l,"/src/lib/posts/2021-05-04-How-to-build-a-beautiful-adaptative-layout-with-Flutter.md":C,"/src/lib/posts/2022-03-29-how-to-Implement-an-uploading-service-to-s3-using-nodejs-and-typescript.md":M,"/src/lib/posts/2022-04-11-how-to-build-an-email-sending-service-with-serverless-in-aws.md":I,"/src/lib/posts/2022-08-15-improve-email-sending-with-amazon-sqs-and-dynamodb.md":U,"/src/lib/posts/2023-08-02-deploy-react-app-on-s3-with-cdk-using-python.md":q})).map(([e,t])=>({slug:e.replace(`/src/lib/posts/`,``).replace(`.md`,``),metadata:t.metadata,component:t.default})).sort((e,t)=>e.metadata.date<t.metadata.date?1:-1);function $(e){return Q.find(t=>t.slug===e)}export{Q as n,$ as t};