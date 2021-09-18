import clearDom from '../helpers/clearDom';

const viewOrder = (obj) => {
  clearDom();

  obj.items.forEach((item) => {
    document.querySelector('#detailsContainer').innerHTML += `
      <div class="card">
        <div class="card-body" style="height: 30px;">
          <h5 class="card-title">${item.itemname}</h5>
          <h5>PRICE: $${item.itemprice}</h5>
        </div>
        <div class="mt-5">
          <a id="edit-order--${item.firebaseKey}" href="#" class="card-link">Edit Item</a>
          <a id="delete-order--${item.firebaseKey}" href="#" class="card-link">Delete Item</a>
        </div>
      </div>
    `;
  });
};

export default viewOrder;
