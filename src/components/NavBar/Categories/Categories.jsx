import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/category/skates"}>
                Skate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/zapatillas"}>
                Zapatillas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/gorras"}>
                Gorras
              </Link>
            </li>
          </ul>
        </div>
    );
}

export default Categories;
