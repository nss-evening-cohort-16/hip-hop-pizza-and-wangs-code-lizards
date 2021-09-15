import clearDom from '../helpers/clearDom';

const homeLoggedIn = () => {
  clearDom();
  document.querySelector('#buttons-container').innerHTML = `
    <img class="pizza-logo" src="https://raw.githubusercontent.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-code-lizards/main/instructions/hhpw-record.png" alt="pizza-logo"><br>
    <button id="view-orders" type="button" class="btn btn-success btn-lg">View Orders</button><br>
    <button id="create-order" type="button" class="btn btn-info btn-lg">Create An Order</button><br>
    <button id="view-revenue" type="button" class="btn btn-warning btn-lg">View Revenue</button>
    `;
};
export default homeLoggedIn;
