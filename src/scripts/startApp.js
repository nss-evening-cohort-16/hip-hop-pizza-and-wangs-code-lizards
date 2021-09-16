import homeLoggedIn from './components/homeLoggedIn';
import navBar from './components/navBar';
import domBuilder from './helpers/domBuilder';
import navEvents from './helpers/navEvents';

const startApp = () => {
  console.warn('App started!');
  domBuilder();
  navBar();
  navEvents();
  homeLoggedIn();
};

export default startApp;
