import buildOrderForm from '../components/forms/buildOrderForm';
import {
  getOrders,
  getSingleOrder,
  updateOrder,
  createOrder
} from '../helpers/data/ordersData';
import showOrders from '../components/showOrders';

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
      console.warn('View Orders');
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

    // CLICK EVENT FOR VIEWING REVENUE
    if (e.target.id.includes('view-revenue')) {
      console.warn('View Revenue');
    }
  });
};

export default domEvents;
