<div style="text-align:center">
<h1>Hip Hop, Pizza, and Wangs</h1> [![Netlify Status](https://api.netlify.com/api/v1/badges/79b922b2-28ca-4630-beeb-886920dc00a8/deploy-status)](https://app.netlify.com/sites/code-lizards-pizza/deploys)

<image src="./instructions/hhpw-record.png" style="height:300px;"></image></div>

## Overview
Hip Hop Pizza and Wangs is a restaurant that has received an influx of to-go orders due to the pandemic. This app is a Point of Sale web app designed to aid the restaurant in an easy and efficient way in tracking these orders. 
## About the User
The user for this app is an employee of Hip Hop, Pizza, and Wangs. The user is able to create orders, add menu items to the orders, and close orders out; as well as track the revenue of the restaurant. 
## Features
* Users are required to login with google authentication. 
* The app allows users to create a unique order profile for each indivudual order with the following input information: Name, Customer Phone Number, Customer Email, and Order Method (Phone or In-Person). The app also displays if the order is open or closed. 
* Users are able to view the Order Details to view and add items and their respective price to the order, this view also displays the total order price. 
* Users are able to Edit and Delete Orders and Items if necessary. 
* When users are ready to close out the order they are able to navigate to the Go To Payment Button
* Users will add payment method and tip amount and upon submitting the Close Order button the order status will be change to "closed" and the income will be added to the total revenue. 
* Revenue can be accessed via the View Revenue button.

## Video Walkthrough
## Relevant Links
* **[Deployed Site](https://app.netlify.com/sites/code-lizards-pizza/deploys)**
* **[Wireframes](https://www.figma.com/file/4y3EZddALuBR3ouSEM57Np/MVP?node-id=0%3A1)**
* **[Data Diagram](https://dbdiagram.io/d/613ff601825b5b014600799c)**
* **[Project Board](https://github.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-code-lizards/projects/1)**
* **[Work Flow](https://docs.google.com/presentation/d/1nWsBxm3ZWunxfTbN3iW6KcEM3fZcVGW4ueXfH6okH8U/edit?usp=sharing)**

## Code Snippet

```    
// CLICK EVENT FOR SUBMITTING NEW ITEM
    if (e.target.id.includes('submit-item')) {
      console.warn('addingitem');
      e.preventDefault();
      const [, orderId] = e.target.id.split('--');
      console.warn(orderId);
      const newItem = {
        itemname: document.querySelector('#itemName').value,
        itemprice: document.querySelector('#itemPrice').value,
        order_id: orderId,
        uid
      };
      addItem(newItem, uid);
      viewOrderDetails(orderId).then(viewOrder);
    }
```
## Project Screenshots
#### Home Page
![home2](https://user-images.githubusercontent.com/86806913/134776557-bce4a7f3-0254-4cd9-afdf-ceddd4e7bc71.PNG)
#### View Orders
![orders](https://user-images.githubusercontent.com/86806913/134776448-58a7346d-a416-4297-95a0-11ffef3da686.PNG)
#### Order Items
![items](https://user-images.githubusercontent.com/86806913/134776464-5160066c-7df8-41e5-9d07-1d38756d0eeb.PNG)
#### Closed Payment
![closed](https://user-images.githubusercontent.com/86806913/134776482-55d5a789-a129-4058-a9d6-2a078ef9435b.PNG)

## Contributers

* [Albert Chittapong](https://github.com/albertchitta)
* [Halie Dyer](https://github.com/DyerHL)
* [Madden Purcell](https://github.com/pmpurcell)
* [Gabriel Smith](https://github.com/Gabrielsmith1998)
