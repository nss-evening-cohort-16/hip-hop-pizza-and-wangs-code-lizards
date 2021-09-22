import clearDom from '../../helpers/clearDom';

const buildPaymentForm = (obj) => {
  clearDom();
  console.warn(obj);
  document.querySelector('#formContainer').innerHTML = `
    <h1 id=order-total> Order Total: $${obj.customername}</h1>
        <form id="payment-form" class="mb-4">
            <div class="form-group">
                <label for="payment-type">Payment Type</label>
                <select class="form-select" aria-label="Default select example" value="${obj.paymenttype || ''}">
                    <option selected>Select Payment Type</option>
                    <option value="1">Cash</option>
                    <option value="2">Check</option>
                    <option value="3">Debit</option>
                    <option value="4">Credit</option>
                    <option value="5">Mobile Payment</option>
                </select>
             <div class="form-group">
                <label for="tip-amount">Tip Amount</label>
                <input type="text" class="form-control" id="tip-amount" placeholder="" value="${obj.ordertip || ''}" required>
            </div>
            <button type="submit" id="close-payment--${obj.firebaseKey}" class="btn btn-success">Close Order</button>
        </form>
    `;
};

export default buildPaymentForm;
