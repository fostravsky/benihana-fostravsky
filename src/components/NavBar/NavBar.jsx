import CartWidget from "../CartWidget/CartWidget";
import Categories from "../Categories/Categories";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="../logo.png" alt="Benihana Skate Store" className="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Categories/>
      </div>
        <CartWidget/>
    </nav>
  );
};

export default NavBar;
