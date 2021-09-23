const navBar = () => {
  document.querySelector('#navBar').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="navbar-collapse" id="navbarNav">
    <a id="home" href="#">
      <img class="nav-logo" src="https://raw.githubusercontent.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-code-lizards/main/instructions/hhpw-record.png" alt="pizza-logo">
    </a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" id="view-orders">View Orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="create-order">Create An Order</a>
        </li>
        <div class="search-logout">
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Orders" aria-label="Search">
      </form>
        </ul>
        <div id="logout-button" class="logout"></div>
      <div>
  </nav>
`;
};
export default navBar;
