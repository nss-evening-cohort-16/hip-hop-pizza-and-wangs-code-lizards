import clearDom from "../../helpers/clearDom";

const buildItemForm = (obj = { }) => {
    clearDom();
    document.querySelector('#formContainer').innerHTML = `
    <form id="payment-form">
    <select class="form-select" aria-label="Default select example" value="${obj.paymenttype || ''}">
    <option selected>Payment Type</option>
    <option value="1">Card</option>
    <option value="2">Cash</option>
    </select>
  <div class="mb-3">
    <label for="tipAmount" class="form-label">Tip Amount</label>
    <input type="text" class="form-control" id="tipAmount" value="${obj.ordertip || ''}">
  </div>
  </select>
  <button type="submit" id="close-payment--${obj.firebaseKey}" class="btn btn-primary">Close Payment</button>
</form>
    `;
};

export default buildItemForm;
