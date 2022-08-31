import './App.css';
import Navbar from './Componentes/Navbar/NavBar';
import ItemListContainer from './Componentes/ItemList/ItemListContainer';
import ItemDitailContainer from './Componentes/DitailContainer/ItemDitailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react';
import CartProvider from './context/CartContext';
import Cart from './cart/Cart';
import dataBaseFS from './services/firestore';



function App() {
  
  return (
  <>
    
    <BrowserRouter>
       <CartProvider>
          <Navbar />
          <Routes>
             <Route path='/' element={<ItemListContainer />} />
             <Route path='/detalle/:id' element={<ItemDitailContainer />} />
             <Route path='/category/:idCategory' element={<ItemListContainer />} />
             <Route path='/cart' element={<Cart/>}/>
          </Routes>
          </CartProvider>
    </BrowserRouter>
    
    
  </>
  );
}

export default App;
