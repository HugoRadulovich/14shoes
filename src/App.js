import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'



function App() {
  return (
   <>
     <Navbar></Navbar>
     <hr></hr>
     <ItemListContainer greeting="Hola Mundo"/>
     <ItemCount stock={5} initial={1}></ItemCount>
   </>
  );
}

export default App;
