import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart  from './components/Cart'



function App() {
  return (
   <>

        <BrowserRouter>
          <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/genero/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>

    
  </>
  );
}

export default App;
