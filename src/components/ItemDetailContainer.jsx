import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, products[3])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    console.log(products[3])
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;