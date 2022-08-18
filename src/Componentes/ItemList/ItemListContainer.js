import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import itemsData from '../../datos/data';
import ItemList from '../ItemList/ItemList';


function getProducts() {
  return new Promise ( (resolve) => {
    setTimeout(()=> {resolve (itemsData)}, 2000)
  })
}

function ItemListContainer() {
  
    const [data, setData] = useState ([]);

    const category = useParams().idCategory;

    useEffect(() => { 
             
                let itemFiltre = itemsData.filter((elemento)=> elemento.category === category);
                getProducts()
                .then((respuesta) => {
                 ( category == undefined ) ? setData( respuesta) : setData(itemFiltre);      
    });
  },[category]);

  return (
    
    <section className='shop'>
  
          <h2 className='section-title'>NUESTROS PRODUCTOS...</h2>
          
          <div className='shop_content'>
          <ItemList data={data}/>
          </div> 
          
         
    </section>
  )
}

export default ItemListContainer

