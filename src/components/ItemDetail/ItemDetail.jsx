import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({item}) => {


    const {addItem} = useCartContext()
    
    const onAdd = (count) => {
        addItem(item, count)
    }   


    return (

        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.model}</h5>
                    <p className="card-text">Marca: {item.brand} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.price)} </p>
                    <p className="card-text">Stock: {item.stock} </p>               
                </div>
            </div>
        <div className="col-md-12 d-flex justify-content-center">
            <ItemCount stock= {item.stock} onAdd={onAdd}/>        
        </div>
         <Link to="/cart" className="nav-link"> <button className='btn btn-success'>Finalizar compra</button></Link>
        </div>
    );
}

export default ItemDetail;