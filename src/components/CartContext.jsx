import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [CartList,setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = CartList.find( product => product.id === item.id);
        if ( found === undefined) {
            setCartList([
                ...CartList,
                {
                    id: item.id,
                    img: item.img,
                    nombre: item.nombre,
                    precio: item.precio,
                    cantidad: qty
                }
            ]);
        } else {
            
            found.cantidad += qty;
        }
      
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = CartList.filter(item =>  item.id != id);
        setCartList(result);
      
    }

    const calcItems = () => {
        let cant = CartList.map(item => item.cantidad)
        return cant.reduce((previousValue, currentValue) => previousValue + currentValue,
        0)
    }

    const calcSubTotalItem = (id) => {
        let index = CartList.map(item => item.id).indexOf(id);
        return CartList[index].precio * CartList[index].cantidad;
        
        
    }

    const calcSubTotal = () => {
        let totalPerItem = CartList.map(item => calcSubTotalItem (item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue)
        console.log('hola',totalPerItem)
    }

    const calcImpuestos = () => {
        return calcSubTotal() * 0.21;
    }

    const calcTotal = () => {
        return calcSubTotal() * 1.21;
        
    }

    return(
        <CartContext.Provider value={{CartList, addToCart, removeList, deleteItem,calcItems,calcSubTotalItem,calcSubTotal,calcImpuestos,calcTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
