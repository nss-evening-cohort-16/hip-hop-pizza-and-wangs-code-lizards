import clearDom from '../helpers/clearDom';

const viewOrder = (obj) => {
  clearDom();
  const orderSum = obj.items.reduce((total, item) => total + item.itemprice, 0);
  document.querySelector('#detailsContainer').innerHTML += `
  <div id="orderTotal">
  <h5>Order Total: $${orderSum}<h5>`;

  document.querySelector('#buttons-container').innerHTML = `
  <button type="button" class="btn btn-success" id="add-item-btn">Add Item</button>
  <button type="button" class="btn btn-primary" id="payment-btn">Go To Payment</button>
  `;

  obj.items.forEach((item) => {
    document.querySelector('#detailsContainer').innerHTML += `
      <div class="card">
        <div class="card-body" style="height: 124px;">
          <h5 class="card-title">${item.itemname}</h5>
          <h5>PRICE: $${item.itemprice}</h5>
        </div>
        <div class="mt-5">
          <a id="edit-item--${item.firebaseKey}" href="#" class="card-link">Edit Item</a>
          <a id="delete-item--${item.firebaseKey}" href="#" class="card-link">Delete Item</a>
        </div>
      </div>
    `;
  });
};

export default viewOrder;
