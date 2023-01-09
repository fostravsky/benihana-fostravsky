import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {

    const {cart,emptyCart, totalPrice, removeItem} = useCartContext()
    return (
        <>
            {cart.length === 0 ? 
            <>  
               <div className="d-flex flex-column align-items-center m-4">
                    <p>Tu carrito esta vacío</p>
                    <Link  className="nav-link" to={'/'}> <button className="btn btnCart btn-success">Continuar comprando</button></Link>
               </div>
            </>
            :
            <div className="container cart">
                {
                    cart.map(prod => 

                        <div className= "row g-0 m-4 align-items-center cartDetail  bg-dark" key={prod}>
                            <div className="col-md-2">
                                <img src={prod.img} alt="" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title mb-2"> {`${prod.model} ${prod.brand}`}</h5>
                                        <p className="card-text">Cantidad: {prod.qty}</p>
                                        <p className="card-text">Precio unitario: {new Intl.NumberFormat('de-De').format(prod.price)}</p>
                                        <p className="card-text">Precio total: {new Intl.NumberFormat('de-De').format(prod.price * prod.qty)}</p>      
                                </div>
                            </div>
                            <div className="col-md-2">
                                    <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><i className="fa-regular fa-trash-can"></i></button>
                            </div>
                        </div>
                )}
                    <p>Resumen de la compra: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                <div>
                    
                    <button className="btn btnCart btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                    <Link  className="nav-link" to={'/'}><button className="btn btnCart btn-primary">Continuar comprando</button></Link>
                    <Link  className="nav-link" to={'/checkout'}><button className="btn btnCart btn-success">Finalizar Compra</button></Link>
                </div>   
            </div>

                    
            }
        </>
        
    );
}


export default Cart;