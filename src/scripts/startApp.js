import homeLoggedIn from './components/homeLoggedIn';
import navBar from './components/navBar';
import domBuilder from './helpers/domBuilder';

const startApp = () => {
  console.warn('App started!');
  domBuilder();
  navBar();
  homeLoggedIn();
};

export default startApp;
