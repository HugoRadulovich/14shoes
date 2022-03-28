import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
   <>
     <Navbar></Navbar>
     <hr></hr>
     <ItemListContainer greeting="Hola Mundo"/>
   </>
  );
}

export default App;
