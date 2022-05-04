import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
<<<<<<< HEAD
=======
/* import customFetch from "../utils/customFetch";
const { products } = require('../utils/products'); */
/* import { firestoreFetch } from '../utils/firestoreFetch'; */
>>>>>>> 6c51417d5872e8380a35c8cfe275c891531f31dd
import {collection, getDocs } from 'firebase/firestore';
import { query, orderBy, where} from '@firebase/firestore'; 
import db from '../utils/firebaseConfig';

const ItemListContainer = () => {
    
    const [dato, setDato] = useState({});
    const { idCategory } = useParams();
    console.log(idCategory)

    useEffect(() => {
      const fetchFromFirestore = async () => {
        let q
        if (idCategory == undefined) {
            q = query(collection(db, "products"));
        }else if (idCategory == 9){
            q = query(collection(db, "products"), where('genero', '==', 'Female'))

        }else{
            q = query(collection(db, "products"), where('genero', '==', 'Male'))
        }
          const querySnapshot = await getDocs(q);
          const dataFromFirestore = querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
          }));
          return dataFromFirestore;
      }
      fetchFromFirestore()
      .then(result => setDato(result))
      .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDato([]);
        })
    }, []);

    return(
        <>
            
            <ItemList products={dato}/>
            
            

        </>

    )
}
export default ItemListContainer;

