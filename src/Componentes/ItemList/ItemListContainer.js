import React, { useEffect, useState} from 'react'
import "./ItemListContainer.css"
import Card from '../Card/CardWidget';
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
  
  const producto = [{
    name: "Nightwing",
    price: 1000,
    imgproducto: "/Multimedia/Comics/Nightwing__uno.jpg"
  },
  {
    name: "Daredevil",
    price: 1550,
    imgproducto: "/Multimedia/Comics/Daredevil.png"
  },
  {
  name: "Batman",
  price: 1150,
  imgproducto: "/Multimedia/Comics/Batman__uno.jpg"
  },
  {
    name: "Giant Days",
    price: 1200,
    imgproducto: "/Multimedia/Comics/Giant__Days.jpg"
  },
  {
    name: "Dos Caras",
    price: 1350,
    imgproducto: "/Multimedia/bat__dos__caras.jpg"
    }
];

  return (
    
    <section className='shop'>
  
          <h2 className='section-title'>NUESTROS COMICS...</h2>
          
          <div className='shop_content'>
          <Card producto={producto[0]}/>
          <Card producto={producto[1]}/>
          <Card producto={producto[2]}/>
          <Card producto={producto[3]}/>
          <Card producto={producto[4]}/>
        <ItemList data={data}/>
          </div> 
         
    </section>
  )
}

export default ItemListContainer

/*
 


          
    
*/ 