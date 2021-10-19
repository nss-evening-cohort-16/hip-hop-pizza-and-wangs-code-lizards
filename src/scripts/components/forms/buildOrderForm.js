import clearDom from '../../helpers/clearDom';

const buildOrderForm = (obj = { }) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `
  <form id="order-form">
  <div class="mb-3">
    <label for="orderName" class="form-label">Order Name</label>
    <input type="text" class="form-control" id="orderName" value="${obj.customerName || ''}">
  </div>
  <div class="mb-3">
    <label for="customerPhone" class="form-label">Customer Phone</label>
    <input type="text" class="form-control" id="customerPhone" value="${obj.customerPhone || ''}">
  </div>
  <div class="mb-3">
    <label for="customerEmail" class="form-label">Customer Email</label>
    <input type="text" class="form-control" id="customerEmail" value="${obj.customerEmail || ''}">
  </div>
  <select class="form-select" id="orderType" aria-label="Default select example" value="${obj.orderType || ''}">
    <option disabled selected>${obj.orderType || 'Order Type'}</option>
    <option value="Phone">Phone</option>
    <option value="In-Person">In-Person</option>
  </select>
  </div>
  <button type="submit" id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-primary">Create/Edit Order</button>
</form>
  `;
};
export default buildOrderForm;
