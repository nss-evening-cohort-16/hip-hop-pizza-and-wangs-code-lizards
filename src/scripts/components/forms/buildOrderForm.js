import clearDom from '../../helpers/clearDom';

const buildOrderForm = (obj = { }) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `
  <form id="order-form">
  <div class="mb-3">
    <label for="orderName" class="form-label">Order Name</label>
    <input type="text" class="form-control" id="orderName" value="${obj.customername || ''}">
  </div>
  <div class="mb-3">
    <label for="customerPhone" class="form-label">Customer Phone</label>
    <input type="text" class="form-control" id="customerPhone" value="${obj.customerphone || ''}">
  </div>
  <div class="mb-3">
    <label for="customerEmail" class="form-label">Customer Email</label>
    <input type="text" class="form-control" id="customerEmail" value="${obj.customeremail || ''}">
  </div>
  <div class="mb-3">
  <label for="order-type-selct" class="form-label">Order Type</label>
  <select class="form-select" aria-label="Default select example" value="${obj.ordertype || ''}">
    <option selected>Order Type</option>
    <option value="1">Phone</option>
    <option value="2">In-Person</option>
  </select>
  </div>
  <button type="submit" id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-primary">Create/Edit Order</button>
</form>
  `;
};
export default buildOrderForm;
