import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
   <>
     <Navbar></Navbar>
     <hr></hr>
    {/*  <ItemListContainer greeting="Hola Mundo" /> */}
    <ItemDetailContainer></ItemDetailContainer>
    {/*  <ItemCount stock={5} initial={1}></ItemCount> */}
   </>
  );
}

export default App;
