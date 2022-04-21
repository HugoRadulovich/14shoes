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

    return(
        <CartContext.Provider value={{CartList, addToCart, removeList, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
