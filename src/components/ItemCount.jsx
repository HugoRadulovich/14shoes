import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const ItemCount= ({stock=0, initial = 1, onAdd}) => {
    
    const [count,setCount]= useState(1)
   
    const increment = () => {
    if (count < stock) {
        setCount(count+1);
        console.log(count)
        
   }}

   
   const decrement = () => {
    if (count > initial) {
        setCount(count-1);
        console.log(count)
        
   }}

    return(
        <>
        <div className="d-flex">
        <button type="button" className="btn btn-dark m-2 p-2"><i className="bi bi-plus-circle-fill" onClick={increment} ></i></button>
        <p className="m-2 p-2">{count}</p>
        <button type="button" className="btn btn-dark m-2 p-2" onClick={decrement}><i className="bi bi-dash-circle-fill"></i></button>
        <button type="button" className="btn btn-dark m-2 p-2" onClick={() => onAdd(count)}>ADD TO CARD</button>
        </div>
        </>
        )
}

export default ItemCount;