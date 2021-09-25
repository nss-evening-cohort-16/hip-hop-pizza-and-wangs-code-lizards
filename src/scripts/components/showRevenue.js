import clearDom from '../helpers/clearDom';

const viewRevenue = (obj) => {
  clearDom();
  const orderRevenue = obj.payments.reduce((total, payments) => total + payments.orderprice + payments.ordertip, 0);
  document.querySelector('#detailsContainer').innerHTML += `
    <div id="orderTotal">
    <h1>Total Revenue: $${orderRevenue}<h1>`;

  const tipRevenue = obj.payments.reduce((total, payments) => total + payments.ordertip, 0);
  Math.round(tipRevenue);
  document.querySelector('#detailsContainer').innerHTML += `
    <div id="tipTotal">
    <h1>Total Tips: $${tipRevenue}<h1>`;
};
export default viewRevenue;
