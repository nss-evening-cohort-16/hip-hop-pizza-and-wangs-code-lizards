const navBar = () => {
  document.querySelector('#navBar').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" id="view-orders">View Orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="create-order">Create An Order</a>
        </li>
      </ul>
      <div id="logout-button"></div>
  </nav>
`;
};
export default navBar;
