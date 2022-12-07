import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} alt="" className="img-fluid rounded-start"/>
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
                    <ItemCount stock= {item.stock}/>
                    
        </div>
            <button className="btn btn-secondary">Finalizar Compra</button>
                    

        </div>
    );
}

export default ItemDetail;