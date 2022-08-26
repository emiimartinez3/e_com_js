
import './BtnCarrito.css'
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';




const BtnCarrito = () => {

   const { totalProductos } = useCartContext();

  return (
    <div>
        <Link to='/cart' className="pp"><FaShoppingBag/></Link>
        <span className='agregado'>{ totalProductos() || ''}</span>
    </div>
  )
}

export default BtnCarrito

