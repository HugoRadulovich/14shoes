import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {



    return (
        <>
        {
            <div className="prop">
                <img src={item.img} alt="" />
                <div className="container">
                <h2>{item.nombre}</h2>
                    <p>Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.</p>
                    <h3>USD$ {item.precio}</h3>
                    <h6>Stock: {item.cantidad} unidades</h6>
                    <ItemCount stock={item.cantidad} initial={1}></ItemCount>
                </div>
                </div>
            

         
           
            

        }
        </>
    );
}

export default ItemDetail;