import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  
    return (
        <>
            <Link to={"/cart"}>
            <button className="btn btn-secondary cartWidget d-flex align-items-baseline">
                <i className="fa-solid fa-cart-shopping cartWidget__icon"></i>
                <span className="cantCarrito">0</span>
            </button>
            </Link>
                
        </>
    );
}

export default CartWidget;
