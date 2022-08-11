import React from 'react'
import "./ItemDitail.css"
export const ItemDitail = ({data}) => {
  return (
    <div className='ditail-container'>
        <img src='{data.imgg}' className='img-ditail'></img>
        <div className='dt-container'>
        <h2 className='title-ditail'>{data.title}</h2>
        <p className='descrip-ditail'>{data.description}</p>
        <span>${data.price}</span>
        <button className='conta'>contador</button>
        <button className='carri'>carrito</button>
        </div>
    </div>
  )
}

export default ItemDitail