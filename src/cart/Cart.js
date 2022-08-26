import React from 'react'
import { Link } from 'react-router-dom';
import ItemCart from '../Componentes/ItemCart/ItemCart';
import { useCartContext } from '../context/CartContext'


const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {

  return (
    <>
         <p>no hay productos en el carrito</p>
         <Link to='/'>Quieres seguir comprando?</Link>
    </>
  )
   }

  return (
    <>
    {
        cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
    }

    <p>
        total: {totalPrice()}
    </p>
    <Link to='/'>agrega mas productos!!!</Link>
    </>
  )
}

export default Cart