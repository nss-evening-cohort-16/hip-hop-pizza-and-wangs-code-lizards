import buildOrderForm from '../components/forms/buildOrderForm';
import {
  getOrders,
  getSingleOrder,
  updateOrder,
  createOrder
} from '../helpers/data/ordersData';
import showOrders from '../components/showOrders';
import viewOrder from '../components/viewOrder';
import viewOrderDetails from '../helpers/data/mergedData';

const domEvents = (uid) => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR CREATING AN ORDER
    if (e.target.id.includes('create-order')) {
      buildOrderForm(uid);
    }

    // SUBMITTING A NEW ORDER
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      console.warn('Order submitted');
      const newOrder = {
        customername: document.querySelector('#orderName').value,
        customerphone: document.querySelector('#customerPhone').value,
        customeremail: document.querySelector('#customerEmail').value,
        ordertype: document.querySelector('#orderType').value,
        isClosed: false,
        uid
      };

      createOrder(newOrder, uid).then(showOrders);
    }

    // CLICK EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-orders')) {
      getOrders(uid).then(showOrders);
    }

    // CLICK EVENT FOR EDITING AN ORDER
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(buildOrderForm);
    }

    // CLICK EVENT FOR UPDATING AN ORDER
    if (e.target.id.includes('update-order')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const orderObject = {
        customername: document.querySelector('#orderName').value,
        customerphone: document.querySelector('#customerPhone').value,
        customeremail: document.querySelector('#customerEmail').value,
        ordertype: document.querySelector('#orderType').value,
        firebaseKey
      };

      updateOrder(orderObject).then(showOrders);
    }

    // CLICK EVENT FOR VIEWING AN ORDER
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewOrderDetails(firebaseKey).then(viewOrder);
    }

    // CLICK EVENT FOR EDITING AN ITEM
    // if (e.target.id.includes('edit-item')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getSingleItem(firebaseKey).then(buildItemForm);
    // }

    // CLICK EVENT FOR UPDATING AN ITEM
    // if (e.target.id.includes('update-item')) {
    //   e.preventDefault();
    //   const [, firebaseKey] = e.target.id.split('--');
    //   const itemObject = {
    //     itemname: document.querySelector('#itemName').value,
    //     itemprice: document.querySelector('#itemPrice').value,
    //     firebaseKey
    //   };

      // updateItem(itemObject).then(showItems);
    }

    // CLICK EVENT FOR VIEWING REVENUE
    if (e.target.id.includes('view-revenue')) {
      console.warn('View Revenue');
    }
  });
};

export default domEvents;
