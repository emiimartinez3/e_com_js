import React, {useEffect, useState} from 'react'
import ItemDitail from '../ItemDitail/ItemDitail';
import itemsData from '../../datos/data';

function ItemDitailContainer(){
  
  const [data,setData] = useState({})

  function getProducto () {
    return new Promise ((resolve => {
     let findItem = itemsData.find((element) => element.id[4])
     setTimeout (()=> {
      resolve(findItem)
    }, 2000);
    }))
  }
   
  useEffect (()=> {
    getProducto().then((product) => { 
      setData(product)
    });
  }, []);

  return (
   <ItemDitail data={data}/> 
  )
}

export default ItemDitailContainer
