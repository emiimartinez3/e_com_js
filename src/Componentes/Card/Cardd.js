import ItemContador from '../BtnContador/ItemCount'
import "./Cardd.css"
import { Link } from 'react-router-dom';

function Cardd({ name, price, imgproducto, category,id }) {
    const onAdd = (quantity)=>{
      console.log(`Compraste ${quantity} unidades`)
    }
  
    
    
    return (
      <div className="box-pro">
          <img src={imgproducto} alt="imagen" className='product-img'></img>
          <h2 className='product-title'>{name}</h2>
          <span className='price'>$ {price}</span>
          <ItemContador initial={1} stock={9} onAdd={onAdd}/>
          <Link to={`detalle/${id}`} className="ver_mas">Ver mas</Link>
      </div>
    );
  }
  
  export default Cardd;