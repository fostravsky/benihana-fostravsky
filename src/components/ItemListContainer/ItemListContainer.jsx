import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import {getProducts} from '../../assets/firebase';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams()

    useEffect(() => {
            if(category) {
                getProducts().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategory === category)
                    const cardProducts = ItemList({productsList})
                    setProducts(cardProducts)
                })
            } else {
                getProducts().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProducts = ItemList({productsList})
                    setProducts(cardProducts)
                })
            }
            
           
    },[category]);
    
    return (
        <div className= "row m-0 d-flex align-items-center justify-content-center">
            {products}
        </div>
       
    );
}

export default ItemListContainer;