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
        orderId: orderId,
        uid
      };
      addItem(newItem, uid);
      viewOrderDetails(orderId).then(viewOrder);
    }
```
## Project Screenshots
#### Home Page
![Screenshot (31)](https://user-images.githubusercontent.com/86082231/134739105-ae9c1896-8d84-4298-9e25-8f9cef23b0e3.png)
#### View Orders
![Screenshot (32)](https://user-images.githubusercontent.com/86082231/134739174-911c8ccf-1bc9-4d18-8622-5f74aa8c15b1.png)
#### Order Items
![Screenshot (33)](https://user-images.githubusercontent.com/86082231/134739178-ca559553-7bf8-4aeb-b0fa-16794a3001dc.png)
#### Closed Payment
![Screenshot (34)](https://user-images.githubusercontent.com/86082231/134739185-0ecde1d9-35d5-4481-90f5-8aa85250d8c4.png)

## Contributers

* [Albert Chittapong](https://github.com/albertchitta)
* [Halie Dyer](https://github.com/DyerHL)
* [Madden Purcell](https://github.com/pmpurcell)
* [Gabriel Smith](https://github.com/Gabrielsmith1998)
