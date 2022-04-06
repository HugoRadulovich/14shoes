import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import customFetch from "../utils/customFetch";
const { products } = require('../utils/products');

const ItemListContainer = ({greeting}) => {
    
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    console.log(products)

    return(
        <>
            {/* <h3>{greeting}</h3> */}
            
            <ItemList products={dato}/>
            
            

        </>

    )
}
export default ItemListContainer;