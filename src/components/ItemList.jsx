import Item from './Item';
import './Spinner.css';


export default function ItemList({ products }){
    return(
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
              
                    
                
                products.length > 0
                ? products.map(item => <Item key={item.id} item={item}/>)
                :<div class="d-flex justify-content-center">
                <div class="spinner-border tam" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
        }
        </div>
        
    );
};