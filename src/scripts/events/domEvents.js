import buildOrderForm from '../components/forms/buildOrderForm';
import {
  getSingleOrder,
  updateOrder,
  createOrder,
  deleteOrder,
  getOrders
} from '../helpers/data/ordersData';
import showOrders from '../components/showOrders';
import viewOrder from '../components/viewOrder';
import viewOrderDetails from '../helpers/data/mergedData';
import buildItemForm from '../components/forms/buildItemForm';
import { addItem, deleteItem, getSingleItem } from '../helpers/data/itemsData';

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
        orderstatus: 'Open',
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

    // CLICK EVENT FOR OPENING ADD ITEM FORM
    if (e.target.id.includes('add-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      buildItemForm(firebaseKey);
    }

    // CLICK EVENT FOR SUBMITTING NEW ITEM
    if (e.target.id.includes('submit-item')) {
      console.warn('addingitem');
      e.preventDefault();
      const [, orderId] = e.target.id.split('--');
      console.warn(orderId);
      const newItem = {
        itemname: document.querySelector('#itemName').value,
        itemprice: Number(document.querySelector('#itemPrice').value),
        order_id: orderId,
        uid
      };
      addItem(newItem, uid).then(() => viewOrderDetails(orderId).then(viewOrder));
    }

    // CLICK EVENT FOR DELETING AN ORDER
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Order?')) {
        const [, id] = e.target.id.split('--');
        deleteOrder(id, uid).then(showOrders);
      }
    }

    // CLICK EVENT FOR DELETING AN ITEM
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Item from Order?')) {
        const [, id] = e.target.id.split('--');
        deleteItem(id, uid);
        getSingleItem(id).then((itemObj) => viewOrderDetails(itemObj.order_id).then(viewOrder));
      }
    }
    // CLICK EVENT FOR VIEWING AN ORDER
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewOrderDetails(firebaseKey).then(viewOrder);
    }

    // CLICK EVENT FOR VIEWING REVENUE
    if (e.target.id.includes('view-revenue')) {
      console.warn('View Revenue');
    }
  });
};

export default domEvents;
