// USE WITH FIREBASE AUTH
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import checkLoginStatus from './helpers/userauth';

const init = () => {
  console.warn('YOU ARE UP AND RUNNING!');
  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
