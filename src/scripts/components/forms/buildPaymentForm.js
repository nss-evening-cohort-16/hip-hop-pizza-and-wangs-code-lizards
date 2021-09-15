import clearDom from '../../helpers/clearDom';

const buildPaymentForm = () => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `
        <form id="payment-form" class="mb-4">
            <div class="form-group">
                <label for="payment-type">Payment Type</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select Payment Type</option>
                    <option value="1">Cash</option>
                    <option value="2">Card</option>
                </select>
             <div class="form-group">
                <label for="tip-amount">Tip Amount</label>
                <input type="text" class="form-control" id="tip-amount" placeholder="" value="" required>
            </div>
            <button type="submit" id="close-order" class="btn btn-success">Close Order</button>
        </form>
    `;
};

export default buildPaymentForm;
