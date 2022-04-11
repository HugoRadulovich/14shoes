import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import customFetch from "../utils/customFetch";
const { products } = require('../utils/products');

const ItemListContainer = () => {
    
    const [dato, setDato] = useState({});
    const { idCategory } = useParams();


    useEffect(() => {
        if (idCategory === undefined) {
            customFetch(2000, products)
            .then(result => setDato(result))
            .catch(err => console.log(err))
        } else {
            customFetch(2000, products.filter(
                item => item.categoryId === parseInt(idCategory)))
                .then(result => setDato(result))
                .catch(err => console.log(err))
        }




            console.log(idCategory)
    }, [idCategory]);


    return(
        <>
            
            <ItemList products={dato}/>
            
            

        </>

    )
}
export default ItemListContainer;