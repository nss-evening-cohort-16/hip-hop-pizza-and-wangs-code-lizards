import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../api/apiKeys';
import homeLoggedOut from '../components/homeLoggedOut';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import startApp from '../startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
      logoutButton();
    } else {
      loginButton();
      homeLoggedOut();
    }
  });
};

export default checkLoginStatus;
