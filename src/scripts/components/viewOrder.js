import clearDom from '../helpers/clearDom';

const viewOrder = (obj) => {
  clearDom();
  const orderSum = obj.items.reduce((total, item) => total + item.itemPrice, 0);
  document.querySelector('#detailsContainer').innerHTML += `
  <div id="orderTotal">
  <h5>Order Total: $${orderSum}<h5>`;

  document.querySelector('#buttons-container').innerHTML = `
  <button type="button" class="btn btn-success" id="add-item-btn--${obj.firebaseKey}">Add Item</button>
  <button type="button" class="btn btn-primary" id="payment-btn--${obj.firebaseKey}">Go To Payment</button>
  `;

  obj.items.forEach((item) => {
    document.querySelector('#detailsContainer').innerHTML += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.itemName}</h5>
          <h5>PRICE: $${item.itemPrice}</h5>
          <div class="mt-5">
            <a id="edit-item--${item.firebaseKey}" href="#" class="card-link">Edit Item</a>
            <a id="delete-item--${item.firebaseKey}--${item.orderId}" href="#" class="card-link" style="color: #FF0000;">Delete Item</a>
          </div>
        </div>
      </div>
    `;
  });
};

export default viewOrder;
