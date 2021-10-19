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
                <h5 class="card-title">${order.customerName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Order Status: ${order.orderStatus}</h6>
                <p class="card-text">Phone: ${order.customerPhone}</p>
                <p class="card-text">Email: ${order.customerEmail}</p>
                <p class="card-text">Order Type: ${order.orderType}</p>
                <a id="order-details--${order.firebaseKey}" href="#" class="card-link">Details</a>
                <a id="edit-order--${order.firebaseKey}" href="#" class="card-link" style="color: #8000FF;">Edit</a>
                <a id="delete-order--${order.firebaseKey}" href="#" class="card-link" style="color: #FF0000;">Delete</a>
            </div>
        </div>`;
  });
};

export default showOrders;
