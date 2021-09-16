import homeLoggedIn from './components/homeLoggedIn';
import navBar from './components/navBar';
import domBuilder from './helpers/domBuilder';
import navEvents from './helpers/navEvents';
import domEvents from './events/domEvents';

const startApp = (user) => {
  console.warn('App started!');
  domBuilder();
  domEvents(user.uid);
  navBar();
  navEvents();
  homeLoggedIn();
};

export default startApp;
