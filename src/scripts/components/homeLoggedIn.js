import clearDom from '../helpers/clearDom';

const homeLoggedIn = () => {
  clearDom();
  document.querySelector('#buttons-container').innerHTML = `
    <button type="button" class="btn btn-primary btn-lg">View Orders</button>
    <button type="button" class="btn btn-secondary btn-lg">Create An Order</button>
    <button type="button" class="btn btn-secondary btn-lg">View Revenue</button>
    `;
};
export default homeLoggedIn;
