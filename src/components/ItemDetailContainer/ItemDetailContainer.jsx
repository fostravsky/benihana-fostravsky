import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { queryDB } from "../../assets/functions";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        queryDB('../json/products.json').then(products => {
            const prod = products.find(product => product.id === parseInt(id))
            setProduct(prod)
        })
        
    }, []);

    return (
        <div className="card itemDetail">
            <ItemDetail item={product} />
        </div>
    );
}

export default ItemDetailContainer;