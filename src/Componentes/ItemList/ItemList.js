import React from 'react'
import "./ItemList.css"
import Card from '../Card/Card';


function ItemList() {

    const producto = [{
        name: "Nightwing",
        precio: 1000,
        imgproducto: "/Multimedia/Comics/Nightwing__uno.jpg"
      },
      {
        name: "Daredevil",
        precio: 1550,
        imgproducto: "/Multimedia/Comics/Daredevil.png"
      },
      {
      name: "Batman",
      precio: 1150,
      imgproducto: "/Multimedia/Comics/Batman__uno.jpg"
      },
      {
        name: "Giant Days",
        precio: 1200,
        imgproducto: "/Multimedia/Comics/Giant__Days.jpg"
      },
      {
        name: "Dos Caras",
        precio: 1350,
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
          </div>
      </section>
    
  )
}

export default ItemList