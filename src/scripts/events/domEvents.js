import buildOrderForm from '../components/forms/buildOrderForm';
import { deleteOrder, getOrders } from '../helpers/data/ordersData';
import showOrders from '../components/showOrders';
import viewOrder from '../components/viewOrder';
import viewOrderDetails from '../helpers/data/mergedData';

const domEvents = (uid) => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR CREATING AN ORDER
    if (e.target.id.includes('create-order')) {
      buildOrderForm(uid);
    }

    // CLICK EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-orders')) {
      console.warn('View Orders');
      getOrders(uid).then(showOrders);
    }

    // CLICK EVENT FOR VIEWING REVENUE
    if (e.target.id.includes('view-revenue')) {
      console.warn('View Revenue');
    }

    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Order?')) {
        const [, id] = e.target.id.split('--');
        deleteOrder(id, uid).then(showOrders);
      }
    }
    // CLICK EVENT FOR VIEWING AN ORDER
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewOrderDetails(firebaseKey).then(viewOrder);
    }
  });
};

export default domEvents;
