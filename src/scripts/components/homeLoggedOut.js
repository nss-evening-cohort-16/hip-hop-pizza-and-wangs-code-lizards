import loginButton from './loginButton';

const homeLoggedOut = () => {
  loginButton();
  document.querySelector('#app').innerHTML = `
  <h1> Welcome to Pizza and Wangssss!</h1>
  <img class="loggedOutPizzaLogo" src="https://github.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-code-lizards/raw/main/instructions/hhpw-record.png"/>
  `;
};

export default homeLoggedOut;
