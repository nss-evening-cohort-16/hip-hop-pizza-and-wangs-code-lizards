import clearDom from '../../helpers/clearDom';

const buildPaymentForm = (obj) => {
  clearDom();
  if (obj.orderStatus === 'Closed') {
    document.querySelector('#detailsContainer').innerHTML = `
    <h1> This order has already been closed!</h1>
    <button type="button" id=return-btn class="btn btn-danger btn-lg">Return to Home</button>
    `;
  } else {
    const orderSum = obj.items.reduce((total, item) => total + item.itemPrice, 0);
    document.querySelector('#formContainer').innerHTML = `
      <h1 id=order-total>${orderSum}</h1>
          <form id="payment-form" class="mb-4">
              <div class="form-group">
                  <label for="payment-type">Payment Type</label>
                   <select class="form-select" id="order-type" aria-label="Default select example" value="${obj.paymentType || ''}">
                      <option disabled selected>${obj.paymentType || 'Select Payment Type'}</option>
                      <option value="Cash">Cash</option>
                      <option value="Check">Check</option>
                      <option value="Debit">Debit</option>
                      <option value="Credit">Credit</option>
                      <option value="Mobile Payment">Mobile Payment</option>
                  </select>
                  <label for="tip-amount">Tip Amount</label>
                  <input type="text" class="form-control" id="tip-amount" placeholder="" value="${obj.orderTip || ''}" required>
              </div>
              <button type="submit" id="close-payment--${obj.firebaseKey}" class="btn btn-success">Close Order</button>
          </form>
    `;
  }
};

export default buildPaymentForm;
