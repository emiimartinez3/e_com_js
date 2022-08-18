import React, {useEffect, useState} from 'react'
import ItemDitail from '../ItemDitail/ItemDitail';
import itemsData from '../../datos/data';
import { useParams } from 'react-router-dom'


const ItemDitailContainer = () => {
  
  const idUrl = useParams().id;
 
  function getProducto () {
  return new Promise ((resolve,reject) => {
    let itemRequested = itemsData.find( elemento => elemento.id == idUrl);
    
    ( itemRequested === undefined ) ? reject("item no encontrado") : resolve(itemRequested)
  });
};

  const [data,setData] = useState([])
   
  useEffect (()=> {
    getProducto()
    .then((respuesta) => setData(respuesta));
    },[]);

  return (
   <ItemDitail data={data}
   /> 
  )
}

export default ItemDitailContainer
