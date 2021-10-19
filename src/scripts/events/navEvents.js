import buildOrderForm from '../components/forms/buildOrderForm';
import homeLoggedIn from '../components/homeLoggedIn';
import showOrders from '../components/showOrders';
import { getOrders, searchOrders } from '../helpers/data/ordersData';

const navEvents = (uid) => {
  document.querySelector('#create-order').addEventListener('click', () => {
    buildOrderForm(uid);
  });

  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders(uid).then(showOrders);
  });

  // CLICK EVENT FOR CLICKING THE LOGO BUTTON
  document.querySelector('#home').addEventListener('click', homeLoggedIn);
  // SEARCHING ORDERS BY CUSTOMER NAME OR NUMBER
  document.querySelector('#search').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search-value').value.toLowerCase();
    searchOrders(searchValue, uid).then(showOrders);
  });
};
export default navEvents;
