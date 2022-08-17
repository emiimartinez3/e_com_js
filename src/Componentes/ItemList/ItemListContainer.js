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

    const idCategory = useParams().idCategory;

    useEffect(() => { 
              getProducts().then((respuesta) => {
                let filtro = itemsData.filter((elemento)=> elemento.category === idCategory)
                if (idCategory === undefined){
                  setData(respuesta)
                }
                else {
                  setData(filtro)
                }
                 
    });
  },[idCategory]);

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

