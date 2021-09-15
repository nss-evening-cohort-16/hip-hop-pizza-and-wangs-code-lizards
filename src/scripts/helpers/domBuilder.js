const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navBar"></div>
    <div id="mainContainer">
      <div id="orderContainer"></div>
      <div id="detailsContainer"></div>
      <div id="formContainer"></div>
    </div>
  `;
};

export default domBuilder;
