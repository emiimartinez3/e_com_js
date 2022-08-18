import React from 'react'
import "./ItemDitail.css"
import ItemContador from '../BtnContador/ItemCount';
import { Link } from 'react-router-dom';


const ItemDitail = ({data}) => {
  const onAdd = (quantity)=>{
    console.log(`Compraste ${quantity} unidades`)
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
        <ItemContador initial={1} stock={9} onAdd={onAdd}/>
        <Link to={"/"} className="vover">volver</Link>
      </div>
    </section>
 )
  
}

  


export default ItemDitail