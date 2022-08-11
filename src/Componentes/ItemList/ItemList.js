import React from 'react'
import "./ItemList.css"
import Cardd from '../Card/Cardd'

function ItemList({data}) {
  return (
    
    data.map((singleMovie) => {
      
      return(
          <div >
          <Cardd 
          key={singleMovie.id}
          name={singleMovie.name}
          category={singleMovie.category}
          imgproducto={singleMovie.imgproducto}
          price={singleMovie.price}
          />
        </div>
        )
    })
  )
}

export default ItemList