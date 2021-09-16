import homeLoggedIn from './components/homeLoggedIn';
import navBar from './components/navBar';
import showOrders from './components/showOrders';
import domBuilder from './helpers/domBuilder';
import { getOrders } from './helpers/data/orders';

const startApp = (user) => {
  console.warn('App started!');
  domBuilder();
  navBar();
  homeLoggedIn();
  getOrders(user.uid).then(showOrders);
};

export default startApp;
