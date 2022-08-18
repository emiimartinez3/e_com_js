import './App.css';
import Navbar from './Componentes/Navbar/NavBar';
import ItemListContainer from './Componentes/ItemList/ItemListContainer';
import ItemDitailContainer from './Componentes/DitailContainer/ItemDitailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import BtnCarrito from './Componentes/BtnCarrito/BtnCarrito';


function App() {

  

  return (
  <>
    
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/detalle/:id' element={<ItemDitailContainer />} />
      <Route path='/category/:idCategory' element={<ItemListContainer />} />
    </Routes>
    </BrowserRouter>
    
    
  </>
  );
}

export default App;
