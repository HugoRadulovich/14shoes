import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import './Vinculos.css'




const Cart = () => {
    const test = useContext(CartContext);

    return(
        <>
        <p className="cartTitulo">Carrito</p>
       
       {

            test.CartList.length > 0
            ?  <>
                <div className="cartBtnEliminarTodo">
                <button onClick={test.removeList} type="button" className="btn btn-dark">Eliminar Todo</button>
                </div>
               <Link to="/" className="vinculo">
                <div className="btnSeguirComprando">
                <button type="button" className="btn btn-dark ">Seguir Comprando</button>
                </div>
               </Link>
                
               </>
            : <p>Tu carrito esta vacio</p>

       }
        

        
        
        
        
        {
            test.CartList.length > 0 && (
                
                    test.CartList.map(item =>
                        <>
                        <hr></hr>
                        <div className="cartBody">
                            <div className="cartImg">
                            <img src={item.img} alt="" />
                            </div>

                            <div className='cartText'>
                            <p><b>Producto: </b>{item.nombre}</p>
                            <p><b>Cantidad: </b>{item.cantidad}</p>
                            <div>
                            <p><b>Precio: </b>USD${item.precio}</p>
                            <p><b>Subtotal: </b> USD${test.calcSubTotalItem(item.id)}</p>
                            </div>
                            <button onClick={() => test.deleteItem(item.id)} type="button" class="btn btn-dark">Eliminar</button>
                            </div>
                        </div>
                       
                        
                        
                        </>)
                
                
            )
        }

        {
           test.CartList.length > 0 && (
               
            <div className="cartTotal">
            <hr></hr>
            <p><b> Subtotal:</b>USD$ {test.calcSubTotal()} </p>
            <p><b>Impuestos:</b>USD$ {test.calcImpuestos()}</p>
            <p><b>TOTAL:</b>USD$ {test.calcTotal()}</p>
            <button type="button" className="btn btn-dark">FINALIZAR COMPRA</button>
            </div>
            
           )
        }
        </>
        
        
    )
}

export default Cart;
