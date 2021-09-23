import clearDom from '../helpers/clearDom';

const paymentSubmitted = () => {
  clearDom();
  document.querySelector('#detailsContainer').innerHTML = `
    <h1> Thank you for submitting your order!</h1>
    <button type="button" id=return-btn class="btn btn-danger btn-lg">Return to Home</button>
    `;
};

export default paymentSubmitted;
