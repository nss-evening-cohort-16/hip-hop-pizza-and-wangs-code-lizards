import clearDom from '../helpers/clearDom';

const showOrders = (array) => {
  clearDom();

  document.querySelector('#buttons-container').innerHTML = `
  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" id="all-btn">All</button>
  <button type="button" class="btn btn-warning" id="open-btn">Open</button>
  <button type="button" class="btn btn-success" id="closed-btn">Closed</button>
  </div>
  `;

  array.forEach((order) => {
    document.querySelector('#orderContainer').innerHTML += `
        <div class="card order-cards" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${order.customername}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Order Status: ${order.orderstatus}</h6>
                <p class="card-text">Phone: ${order.customerphone}</p>
                <p class="card-text">Email: ${order.customeremail}</p>
                <p class="card-text">Order Type: ${order.ordertype}</p>
                <a id="order-details--${order.firebaseKey}" href="#" class="card-link">Details</a>
                <a id="edit-order--${order.firebaseKey}" href="#" class="card-link" style="color: #8000FF;">Edit</a>
                <a id="delete-order--${order.firebaseKey}" href="#" class="card-link" style="color: #FF0000;">Delete</a>
            </div>
        </div>`;
  });
};

export default showOrders;
