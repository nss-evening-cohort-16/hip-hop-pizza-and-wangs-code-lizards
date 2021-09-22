import buildOrderForm from '../components/forms/buildOrderForm';
import homeLoggedIn from '../components/homeLoggedIn';
import showOrders from '../components/showOrders';
import { getOrders } from '../helpers/data/ordersData';

const navEvents = (uid) => {
  document.querySelector('#create-order').addEventListener('click', () => {
    buildOrderForm(uid);
  });

  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders(uid).then(showOrders);
  });

  // CLICK EVENT FOR CLICKING THE LOGO BUTTON
  document.querySelector('#home').addEventListener('click', homeLoggedIn);
};
export default navEvents;
