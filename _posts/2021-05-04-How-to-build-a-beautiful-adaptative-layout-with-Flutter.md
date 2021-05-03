---
layout: post
title: How to build a beautiful adaptative layout with Flutter
subtitle: Learn Flutter
gh-repo: messaismael/e-commerce-mobile-app
gh-badge: [fork, follow]
cover-img: /assets/img/article2/cover.jpeg
tags: [tutorial]
comments: true
---

## **``What is Flutter``**

**Flutter** is an open-source mobile application development SDK that is created by **Google**. It is used to develop applications for **Android** and **IOS**.

In this article, we will build the following app designed by [Vijay Gupta](https://vijaygupta.work/?ref=uistore.design) :

![img1](/assets/img/article2/img1.png){: .mx-auto.d-block :}

Visibly it looks complicated🤔, but this is not the case no worry!!!😇

## **``Step 1: Implement the flutter app structure``**

For that, we will use the Scaffold widget. The Scaffold is a widget in Flutter used to implements the basic material design visual layout structure

```.
...
return Scaffold(
  appBar: AppBar(
    backgroundColor: Colors.white,
    leading: GestureDetector(
      onTap: () {},
      child: Icon(Icons.menu,size: 30.0,),
    ),
    title: Text(
      "bagzz",
      style: TextStyle(
        color: Colors.black,
        fontWeight:  FontWeight.w900
      ),
    ), 
    titleSpacing: 0,
    actions: <Widget>[
      Padding(padding: EdgeInsets.fromLTRB(15.0, 10.0, 20.0, 10.0),
        child: GestureDetector(
          onTap: () {},
          child: ClipRRect(
            borderRadius: BorderRadius.circular(15.0),
            child: Image.asset(
              "assets/images/avatar.png",
              width: 35.0,
              height: 60.0,
              fit: BoxFit.fill,
            ),
          ),
        )
      ),
    ],
  ),
  body: Center(child: Text("Hello world! "))
);
```

**Scaffold** contains various functionality from giving an **appbar**, **body**, a floating button, a drawer

- appBar

  The Appbar is divided into 5 part like you can see below

![img2](/assets/img/article2/img2.png){: .mx-auto.d-block :}

- body

  Here we are going to write our stuff

And we have this after 😃!!

![img3](/assets/img/article2/img3.png){: .mx-auto.d-block :}

## **``Step 2: Implement the bottom navigation bar``**

![img4](/assets/img/article2/img4.png){: .mx-auto.d-block :}

In the code below we create a **Stateless BottomNavBar widget**, that takes in parameter a **number** and a **callback function**.

<script src="https://gist.github.com/messaismael/20087c6821ef52fda0ebf0eeeea9e008.js"></script>

## **``Step 3: Implement the card of the product``**

For that, we are going to create a **widget** called **ProductCard**. The main role of the **ProductCard widget** is to display each product with the layout below:

![img5](/assets/img/article2/img5.png){: .mx-auto.d-block :}

**ProductCard** is a **Stateful widget** that takes in parameter :

- The name of product
- The product image URL

The code below can enlighten you 🧐!

<script src="https://gist.github.com/messaismael/2a0abce26becedeb9e70f2990580f2fe.js"></script>

## **``Step 4: Implement the product list``**

Here we will have another widget called **ProductList**, this widget has to goal to display the list of **ProductCard** like a grid. For that, we will use the **GridView widget**.
**Gridview** is a widget in flutter that displays the items in a 2-D array(two-dimensional rows and columns). The code that follows is an implementation of **adaptative Gridview** with the method **extent** :

```.
class ProductList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GridView.extent(
      physics: NeverScrollableScrollPhysics(),/*disable internal scroll*/
      shrinkWrap: true,
      maxCrossAxisExtent: 170.0,
      crossAxisSpacing: 10.0,
      mainAxisSpacing: 10.0,
      childAspectRatio: 0.55,/*The key is the childAspectRatio. This value is use to determine the layout in GridView.*/
      children: <Widget>[
        for(var product in products)
          ProductCard(
            name: product.name,
            imageUrl: product.picture
          ),
      ]
    );
  }
}
```

## **``Step 5: Implement the Carousel 🎠 slider``**

![img6](/assets/img/article2/img6.png){: .mx-auto.d-block :}

The carousel package we will be using is ``carousel_slider``: [https://pub.dev/packages/carousel_slider](https://pub.dev/packages/carousel_slider).

In the ``pubspec.yaml`` file adds the current package like this:

```.
name: flutter_app
description: A new Flutter project.
publish_to: 'none'
version: 1.0.0+1
environment:
  sdk: ">=2.7.0 <3.0.0"
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
  carousel_slider: 3.0.0
```

Next, run ***$ flutter  package get***

Below you can see the implementation of the **CarouselWidget**:

<script src="https://gist.github.com/messaismael/cc2808c3ad2fc2a4463f0e218234d867.js"></script>

## ``Step 6: The widgets assembly``

Yes, it's in this part that we are going to call our widgets in the main **widget MyHomePage**. We have this after:

<script src="https://gist.github.com/messaismael/61db2152ac02487a459eae2c59e98345.js"></script>

In short, we have this at the end 😎!

![final](/assets/img/article2/FullSizeRender.gif){: .mx-auto.d-block :}

You can check the whole project **[here](https://github.com/messaismael/e-commerce-mobile-app)**

Thanks for reading this post, recommend and share if you enjoyed it.

Follow me on **[Facebook](https://web.facebook.com/messaismael.dassi/)**, **[Twitter](https://twitter.com/MessaIsmael)**, **[LinkedIn](https://www.linkedin.com/in/ismael-messa-abb90a207/)**.
