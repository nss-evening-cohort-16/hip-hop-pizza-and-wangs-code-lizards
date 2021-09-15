const buildOrderForm = (obj = { }) => {
  document.querySelector('#formContainer').innerHTML = `
  <form id="order-form">
  <div class="mb-3">
    <label for="orderName" class="form-label">Order Name</label>
    <input type="text" class="form-control" id="orderName" value="${obj.customername}>
  </div>
  <div class="mb-3">
  <label for="customerPhone" class="form-label">Customer Phone</label>
  <input type="text" class="form-control" id="customerPhone" value="${obj.customerphone}>
  </div>
  <div class="mb-3">
  <label for="customerEmail" class="form-label">Customer Email</label>
  <input type="text" class="form-control" id="customerEmail" value="${obj.customeremail}>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <select class="form-select" aria-label="Default select example" value="${obj.ordertype}>
  <option selected>Order Type</option>
  <option value="1">Phone</option>
  <option value="2">In-Person</option>
  </select>
  <button type="submit" id="${obj.firebaseKey ? } class="btn btn-primary">Submit</button>
</form>
  `
}