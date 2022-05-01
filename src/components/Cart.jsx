import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import './Vinculos.css'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import Swal from 'sweetalert2'



const Cart = () => {
    const test = useContext(CartContext);

    const checkout = () => {
      
        const itemsDB = test.CartList.map(item => ({
            id: item.id,
            nombre: item.nombre,
            prrecio: item.precio
          }));
      
          test.CartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
              cantidad: increment(-item.cantidad)
            });
          });
      
          let order = {
            buyer: {
              nombre: "Mauro Lombardo",
              email: "duki@gmail.com",
              numero: "123456789"
            },
            total: test.calcTotal(),
            items: itemsDB,
            date: serverTimestamp()
          };
        console.log(order)


        const createOrderInFirestore = async () => {
          
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
          }
          createOrderInFirestore()
          .then(result =>  Swal.fire({
            icon: 'success',
            title: 'Confirmado',
            text: 'El pedido '+ result.id + ' ha sido procesado',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: 'black',}

      )
            )
          .catch(err => console.log(err));
            
          test.removeList();
    }

    

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
            <button onClick={checkout} type="button" className="btn btn-dark">FINALIZAR COMPRA</button>
            </div>
            
           )
        }
        </>
        
        
    )
}

export default Cart;
