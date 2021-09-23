import clearDom from '../helpers/clearDom';

const viewRevenue = (obj) => {
  clearDom();
  const orderRevenue = obj.payments.reduce((total, payments) => total + payments.orderprice, 0);
  document.querySelector('#detailsContainer').innerHTML += `
    <div id="orderTotal">
    <h5>Total Revenue: $${orderRevenue}<h5>`;

  const tipRevenue = obj.payments.reduce((total, payments) => total + payments.ordertip, 0);
  Math.round(tipRevenue);
  document.querySelector('#detailsContainer').innerHTML += `
    <div id="tipTotal">
    <h5>Total Tips: $${tipRevenue}<h5>`;
};
export default viewRevenue;
