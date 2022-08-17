import React, {useEffect, useState} from 'react'
import ItemDitail from '../ItemDitail/ItemDitail';
import itemsData from '../../datos/data';
import {useParams} from 'react-router-dom'


function ItemDitailContainer({itemid}){
  
  const [item,setData] = useState({})
  const idUrl = useParams().id

  
function getProducto () {
  return new Promise ((resolve,reject) => {

    let itemRequested = itemsData.find( elemento => elemento.id == idUrl)
    resolve (itemRequested);
    if( itemRequested === undefined )
    reject('No esta ese producto')
    else resolve(itemRequested)
  })
}
   
  useEffect (()=> {
    getProducto().then((product) => setData(product))
    .catch ((error)=> alert(error));
    },[]);

  return (
   <ItemDitail
             key={item.id}
             image={item.imgprducto}
             name={item.name}
             price={item.price}
             category={item.category}
             description={item.description}
   /> 
  )
}

export default ItemDitailContainer
