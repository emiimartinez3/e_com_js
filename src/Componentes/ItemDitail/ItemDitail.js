import React from 'react'
import "./ItemDitail.css"


function ItemDitail ({data}) {
  return (
    <div className='ditail-container'>
        <img src={data.imgproducto} className='img-ditail'></img>
        <div className='dt-container'>
        <h2 className='title-ditail'>{data.name}</h2>
        <p>{data.category}</p>
        <p className='descrip-ditail'>{data.description}</p>*/
        <span>${data.price}</span>
        <button className='conta'>contador</button>
        <button className='carri'>carrito</button>
        </div>
    </div>
  )
}

export default ItemDitail