import React from 'react'
import "./ItemDitail.css"
import ItemContador from '../BtnContador/ItemCount'
import { Link } from 'react-router-dom';

const ItemDitail = ({imgproducto,name,price,category,description}) => {
  const onAdd = (quantity)=>{
    console.log(`Compraste ${quantity} unidades`)
      }

 return (
  <section className='ditail-container'>
      <div className='img-container'>
          <img src={imgproducto} className='img-ditail'></img>
      </div>
      
      <div className='dt-container'>
        <h2 className='title-ditail'>{name}</h2>
        <p className='cat-ditail'>Categoria : {category}</p>
        <p className='descrip-ditail'>{description}</p>
        <span className='price-ditail'>${price}</span>
        <ItemContador initial={1} stock={9} onAdd={onAdd}/>
        <Link to='/'>Volver</Link>
      </div>
    </section>
 )
  
}

  


export default ItemDitail