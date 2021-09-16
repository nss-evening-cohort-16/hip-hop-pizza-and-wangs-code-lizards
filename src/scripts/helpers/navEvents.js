import buildOrderForm from './buildOrderForm';

const navEvents = () => {
  document.querySelector('#create-order').addEventListener('click', () => {
    buildOrderForm();
  });

  document.querySelector('#view-orders').addEventListener('click', () => {
    console.warn('View Orders');
  });
};
export default navEvents;
