import buildOrderForm from '../components/forms/buildOrderForm';
import showOrders from '../components/showOrders';
import { getOrders } from '../helpers/data/ordersData';

const navEvents = (uid) => {
  document.querySelector('#create-order').addEventListener('click', () => {
    buildOrderForm();
  });

  document.querySelector('#view-orders').addEventListener('click', () => {
    console.warn('View Orders');
    getOrders(uid).then(showOrders);
  });
};
export default navEvents;
