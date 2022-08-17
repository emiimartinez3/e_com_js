import './App.css';
import Navbar from './Componentes/Navbar/NavBar';
import ItemListContainer from './Componentes/ItemList/ItemListContainer';
import ItemDitailContainer from './Componentes/DitailContainer/ItemDitailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  

  return (
  <>
    
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='categorias/:idCategory' element={<ItemListContainer />} />
      <Route path='/detalle/:id' element={<ItemDitailContainer />} />
    </Routes>
    </BrowserRouter>
    
    <ItemDitailContainer />
  </>
  );
}

export default App;
