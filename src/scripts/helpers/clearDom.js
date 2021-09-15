const clearDom = () => {
  document.querySelector('#mainContainer').innerHTML = '';
  document.querySelector('#orderContainer').innerHTML = '';
  document.querySelector('#detailsContainer').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';
};

export default clearDom;
