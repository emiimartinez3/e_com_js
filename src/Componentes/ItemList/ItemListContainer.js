import React, { useEffect, useState} from 'react'
import "./ItemListContainer.css"
import itemsData from '../../datos/data';
import ItemList from '../ItemList/ItemList'


function getProducts() {
  return new Promise ( (resolve) => {
    setTimeout(()=> {resolve (itemsData)}, 2000)
  })
}

function ItemListContainer() {
  
    const [data, setData] = useState ([]);

    useEffect(() => { 
    getProducts().then((respuesta) => {
      setData(respuesta)
    });
  },[]);

  return (
    
    <section className='shop'>
  
          <h2 className='section-title'>NUESTROS COMICS...</h2>
          
          <div className='shop_content'>
          <ItemList data={data}/>
          </div> 
          
         
    </section>
  )
}

export default ItemListContainer

