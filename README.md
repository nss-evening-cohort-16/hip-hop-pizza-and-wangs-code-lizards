<div style="text-align:center">
<h1>Hip Hop, Pizza, and Wangs [![Netlify Status](https://api.netlify.com/api/v1/badges/79b922b2-28ca-4630-beeb-886920dc00a8/deploy-status)](https://app.netlify.com/sites/code-lizards-pizza/deploys)</h1>

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

`    
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
`
## Project Screenshots

## Contributers

* [Albert Chittapong](https://github.com/albertchitta)
* [Halie Dyer](https://github.com/DyerHL)
* [Madden Purcell](https://github.com/pmpurcell)
* [Gabriel Smith](https://github.com/Gabrielsmith1998)


## Get Started
**READ ALL INSTRUCTIONS BEFORE BEGINNING THIS PROJECT.** Take notes as you read.

Everything that needs to be done before coding starts.

* **ERD** - Create an ERD to show the relationships between all of  your data
* **Postman Collection** - Create a postman collection to store and test out all of your API calls.
* **[Wireframes](https://www.figma.com/file/4y3EZddALuBR3ouSEM57Np/MVP?node-id=0%3A1)** - This is the basic MVP wireframe. You can choose to style how you wish. (View the [click through prototype](https://www.figma.com/proto/4y3EZddALuBR3ouSEM57Np/MVP?scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2) if you want to see the flow)
* **Flowchart** - Plan out the flow of your data through the application
* **Github Issue Tickets** - Using the Project Instructions as a guide, create issue tickets for this project’s work.
* **Github Milestones** - Separate those issue tickets into Milestones to plan out the work.
* **Github Project Board** - Create a project board, add all of your issue tickets, and order them by priority.

## Definition of Done

Do not submit this project until all of the following are complete:

1. All items are completed in getting started
1. MVP, defined by the Acceptance Criteria, has been completed
1. The title of your application is visible in the browser tab
1. The project has been deployed
1. Loom video has been created
1. `README.md` has been updated

## Requirements

Things to remember while coding out the project

* Clean code - single responsibility principle
* ES6 Modules bundled with webpack
* No errors - linters should be clean
* Bootstrap 5 for styling
* Completely planned out - before each section you should be making new cards on your Github project board before you code
* Wireframes are provided for you for MVP
* You should have an ERD

### Instructions

* [MVP Definition - It Gets the Job Done](./instructions/mvp.md)
* [Stretch Goals 1 - Filtering the Data](./instructions/stretch-1.md)
* [Stretch Goals 2 - Dealing with Change](./instructions/stretch-2.md)
* [Stretch Goals 3 - Play that Funky Music](./instructions/stretch-3.md)
