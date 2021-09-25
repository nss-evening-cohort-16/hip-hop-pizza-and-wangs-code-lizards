import clearDom from '../../helpers/clearDom';

const buildItemForm = (orderId, obj = { }) => {
  clearDom();
  document.querySelector('#formContainer').innerHTML = `
    <form id="item-form">
      <div class="mb-3">
        <label for="itemName" class="form-label">Item Name</label>
        <input type="text" class="form-control" id="itemName" value="${obj.itemName || ''}">
      </div>
      <div class="mb-3">
        <label for="itemPrice" class="form-label">Item Price</label>
        <input type="number" class="form-control" id="itemPrice" value="${obj.itemPrice || ''}">
      </div>
      </select>
       <button type="submit" id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : `submit-item--${orderId}`}" class="btn btn-primary">Submit</button>
    </form>
    `;
};

export default buildItemForm;
