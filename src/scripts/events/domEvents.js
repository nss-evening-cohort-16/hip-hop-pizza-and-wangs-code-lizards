import buildOrderForm from '../components/forms/buildOrderForm';
import {
  getSingleOrder,
  updateOrder,
  createOrder,
  getOrders,
  closeOrder,
  filterOrders,
} from '../helpers/data/ordersData';
import showOrders from '../components/showOrders';
import viewOrder from '../components/viewOrder';
import { deleteOrderItems, viewOrderDetails, viewOrderRevenue } from '../helpers/data/mergedData';
import buildItemForm from '../components/forms/buildItemForm';
import {
  addItem,
  deleteItem,
  getSingleItem,
  updateItem
} from '../helpers/data/itemsData';
import buildPaymentForm from '../components/forms/buildPaymentForm';
import paymentSubmitted from '../components/paymentSubmitted';
import { createPayment } from '../helpers/data/paymentData';
import viewRevenue from '../components/showRevenue';
// import viewRevenue from '../components/showRevenue';

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
        customerName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#customerPhone').value,
        customerEmail: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        orderStatus: 'Open',
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
        customerName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#customerPhone').value,
        customerEmail: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        firebaseKey
      };

      updateOrder(orderObject, uid).then(showOrders);
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
        itemName: document.querySelector('#itemName').value,
        itemPrice: Number(document.querySelector('#itemPrice').value),
        orderId,
        uid
      };
      addItem(newItem, uid).then(() => viewOrderDetails(orderId).then(viewOrder));
    }

    // CLICK EVENT FOR DELETING AN ORDER
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Order?')) {
        const [, id] = e.target.id.split('--');
        deleteOrderItems(id, uid).then(() => getOrders(uid).then(showOrders));
      }
    }

    // CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => buildItemForm(itemObj.orderId, itemObj));
    }

    // CLICK EVENT FOR UPDATING AN ITEM
    if (e.target.id.includes('update-item')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: Number(document.querySelector('#itemPrice').value),
        firebaseKey
      };
      updateItem(itemObject);
      getSingleItem(firebaseKey).then((itemObj) => viewOrderDetails(itemObj.orderId).then(viewOrder));
    }

    // CLICK EVENT FOR DELETING AN ITEM
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Item from Order?')) {
        const [, id, orderId] = e.target.id.split('--');
        deleteItem(id, uid);
        viewOrderDetails(orderId).then(viewOrder);
      }
    }
    // CLICK EVENT FOR VIEWING AN ORDER
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewOrderDetails(firebaseKey).then(viewOrder);
    }
    // CLICK EVENT FOR VIEWING PAYMENT FORM OF AN ORDER
    if (e.target.id.includes('payment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewOrderDetails(firebaseKey).then(buildPaymentForm);
    }
    // CLOSE PAYMENT
    if (e.target.id.includes('close-payment')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const newOrder = {
        orderPrice: Number(document.querySelector('#order-total').innerHTML),
        orderTip: Number(document.querySelector('#tip-amount').value),
        orderType: document.querySelector('#order-type').value,
        orderDate: Date(),
        orderId: firebaseKey,
        uid
      };
      createPayment(newOrder).then(() => closeOrder(firebaseKey)).then(paymentSubmitted);
    }
    // RETURN AFTER A PAYMENT
    if (e.target.id.includes('return-btn')) {
      getOrders(uid).then(showOrders);
    }
    // CLICK EVENT FOR VIEWING REVENUE
    if (e.target.id.includes('view-revenue')) {
      viewOrderRevenue(uid).then(viewRevenue);
      console.warn('View Revenue');
    }
    // FILTER OPEN AND CLOSED BUTTONS
    if (e.target.id.includes('all-btn')) {
      console.warn('All Orders Button Clicked');
      getOrders(uid).then(showOrders);
    }
    if (e.target.id.includes('open-btn')) {
      console.warn('Open Orders Button Clicked');
      const openOrders = document.querySelector('#open-btn').innerHTML;
      console.warn(openOrders);
      filterOrders(uid, openOrders).then(showOrders);
    }
    if (e.target.id.includes('closed-btn')) {
      console.warn('Closed Orders Button Clicked');
      const openOrders = document.querySelector('#closed-btn').innerHTML;
      console.warn(openOrders);
      filterOrders(uid, openOrders).then(showOrders);
    }
  });
};

export default domEvents;
