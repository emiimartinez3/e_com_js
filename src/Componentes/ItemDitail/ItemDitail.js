import React from 'react'
import "./ItemDitail.css"
import ItemContador from '../BtnContador/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BtnCarrito from '../BtnCarrito/BtnCarrito';


const ItemDitail = ({data}) => {

  const [goToCart, serGoToCart] = useState(false);

  const onAdd = () => {
    serGoToCart(true);
      }

 return (
  <section className='ditail-container'>
      <div className='img-container'>
          <img src={data.imgproducto} className='img-ditail'></img>
      </div>
      
      <div className='dt-container'>
        <h2 className='title-ditail'>{data.name}</h2>
        <p className='cat-ditail'>Categoria : {data.category}</p>
        <p className='descrip-ditail'>{data.description}</p>
        <span className='price-ditail'>${data.price}</span>
        {
          goToCart 
                  ? <Link to={"/cart"}>Finalizar compra?</Link>
                  : <ItemContador initial={1} stock={9} onAdd={onAdd}/>
        }
        <Link to={'/'} className="volver">Volver</Link>
      </div>
    </section>
 )
  
}

  


export default ItemDitail