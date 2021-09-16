import buildOrderForm from './buildOrderForm';

const navEvents = () => {
  document.querySelector('#create-order').addEventListener('click', () => {
    buildOrderForm();
  });
};
export default navEvents;
