import React from 'react'
import { useCartContext } from '../../context/CartContext'
import "./ItemCart.css"


const ItemCart = ({ producto }) => {
    
    const { removeProduct } = useCartContext();
  return (
    <div className='cart-container'>
        <img src={ producto.imgproducto} ></img>
        <div>
            <h5 className='product-cart'>Producto: {producto.name}</h5>
            <h5 className='product-cart'>Cantidad: {producto.quantity}</h5>
            <h5 className='product-cart'>Precio: {producto.price}</h5>
            <h5 className='product-cart'>Subtotal: {producto.quantity * producto.price } </h5>
            <button onClick={() => removeProduct(producto.id) } className='eliminar'>Eliminar</button>
        </div>

    </div>
  )
}

export default ItemCart