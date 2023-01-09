import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Categories from "./Categories/Categories";
import "./NavBar.css";
import DarkModeBtn from './DarkModeBtn/DarkModeBtn'
import { useDarkModeContext } from '../../context/DarkModeContext';

const NavBar = () => {
  const {darkMode} = useDarkModeContext()

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'bg-dark' : 'bg-primary' }`}>
      <div className="container-fluid">
        <Link className="nav-link" to={"/"}>
          <img src="../logo.png" alt="Benihana Skate Store" className="logo"/>
         </Link>
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
        <DarkModeBtn/>
    </nav>
  );
};

export default NavBar;
