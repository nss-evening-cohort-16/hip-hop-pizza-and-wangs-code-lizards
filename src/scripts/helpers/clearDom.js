const clearDom = () => {
  document.querySelector('#buttons-container').innerHTML = '';
  document.querySelector('#orderContainer').innerHTML = '';
  document.querySelector('#detailsContainer').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
};

export default clearDom;
