import clearDom from '../helpers/clearDom';

const viewRevenue = (obj) => {
  clearDom();
  const orderRevenue = obj.payments.reduce((total, payments) => total + payments.orderPrice + payments.orderTip, 0);
  const tipRevenue = obj.payments.reduce((total, payments) => total + payments.orderTip, 0);
  document.querySelector('#detailsContainer').innerHTML += `
    <div id="orderTotal">
    <h1>Total Revenue: $${orderRevenue}<h1>
    <h1>Total Tips: $${tipRevenue}<h1>`;
};
export default viewRevenue;
