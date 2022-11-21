import './CartWidget.css';

const CartWidget = () => {
    return (
        <ul className="navbar-nav  align-items-center cart-widget">
        <li className="nav-item">
            <i className="fa-solid fa-cart-shopping cart-widget-icon"></i>
        </li>
        <p>0</p>
        </ul>
    );
}

export default CartWidget;
