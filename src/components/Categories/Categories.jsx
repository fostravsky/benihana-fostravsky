import "./Categories.css";

const Categories = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Zapatillas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gorras
              </a>
            </li>
          </ul>
        </div>
    );
}

export default Categories;
