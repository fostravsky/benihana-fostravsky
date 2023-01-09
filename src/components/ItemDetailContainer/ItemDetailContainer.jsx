import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../assets/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams()


    useEffect(() => {
        getProduct(id).then(prod => setProduct(prod))

        
    }, [id]);

    return (
        <div className="card itemDetail bg-dark">
            <ItemDetail item={product} />
        </div>
    );
}

export default ItemDetailContainer;