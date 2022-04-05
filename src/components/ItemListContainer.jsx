import ItemList from './ItemList';

import { useEffect, useState } from 'react';
import { getProducts } from '../utils/products';


const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts().then(function(products){
            console.log(products);

            setProducts(products)
        });
    }, []);

    return(
        <>
            <h3>{greeting}</h3>
            <ItemList products={products}/>
            
            

        </>

    )
}
export default ItemListContainer;