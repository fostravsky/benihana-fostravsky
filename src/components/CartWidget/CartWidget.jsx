import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import './CartWidget.css';

const CartWidget = () => {
    const {getItemQuantity} = useCartContext()

  
    return (
        <>
            <Link to={"/cart"}>
                <button className="btn btn-secondary cartWidget d-flex align-items-baseline">
                    <i className="fa-solid fa-cart-shopping cartWidget__icon"></i>
                    {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                </button>
            </Link>
                
        </>
    );
}

export default CartWidget;
