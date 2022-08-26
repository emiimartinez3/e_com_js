import React from 'react'
import { useCartContext } from '../../context/CartContext'
import "./ItemCart.css"


const ItemCart = ({ producto }) => {
    
    const { removeProduct } = useCartContext();
  return (
    <div className='cart-container'>
        <img src={ producto.imgproducto}></img>
        <div>
            <h5>Producto: {producto.name}</h5>
            <h5>Cantidad:{producto.quantity}</h5>
            <h5>Precio: {producto.price}</h5>
            <h5>Subtotal: {producto.quantity * producto.price } </h5>
            <button onClick={() => removeProduct(producto.id) }>eliminar</button>
        </div>

    </div>
  )
}

export default ItemCart