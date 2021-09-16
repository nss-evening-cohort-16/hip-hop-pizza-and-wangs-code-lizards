import clearDom from '../helpers/clearDom';

const showOrders = (array) => {
  clearDom();

  array.forEach((order) => {
    document.querySelector('#orderContainer').innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${order.customername}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Order Status: ${order.isClosed}</h6>
                <p class="card-text">Phone: ${order.customerphone}</p>
                <p class="card-text">Email: ${order.customeremail}</p>
                <p class="card-text">Order Type: ${order.ordertype}</p>
                <a href="#" class="card-link">Details</a>
                <a href="#" class="card-link">Edit</a>
                <a href="#" class="card-link">Delete</a>
            </div>
        </div>`;
  });
};

export default showOrders;
