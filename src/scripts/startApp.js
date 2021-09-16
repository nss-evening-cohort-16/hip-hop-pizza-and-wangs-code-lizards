import homeLoggedIn from './components/homeLoggedIn';
import navBar from './components/navBar';
import domBuilder from './helpers/domBuilder';
import domEvents from './events/domEvents';

const startApp = (user) => {
  console.warn('App started!');
  domBuilder();
  domEvents(user.uid);
  navBar();
  homeLoggedIn();
};

export default startApp;
