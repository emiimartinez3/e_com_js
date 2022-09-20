import React from 'react'
import { Link } from 'react-router-dom';
import ItemCart from '../Componentes/ItemCart/ItemCart';
import { UserForm } from '../Componentes/UseForm/UserForm';
import { useCartContext } from '../context/CartContext'
import "./Cart.css"



const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {

  return (
    
    <div className='boxbox'>
         <p className='no-productos'>no hay productos en el carrito</p>
         <Link to='/' className='shop-si'>Quieres seguir comprando?</Link>
    </div>
  
  )
   }

  return (
    <>
       
    {
        cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
    }

    <p className='total-p'>
        total: ${totalPrice()}
    </p>
    <p className='produc-plus'><Link to='/' className='produc-a'>Agrega mas productos!!!</Link></p>
    <UserForm cart= {cart} />
    
    </>
  )
}

export default Cart