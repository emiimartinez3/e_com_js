import React, {useContext} from 'react'
import "./ItemList.css"
import Cardd from '../Card/Cardd'

function ItemList({data}) {

  return (
    
    data.map((singleMovie) => {
      
      return(
          <Cardd 
          key={singleMovie.id}
          id={singleMovie.id}
          name={singleMovie.name}
          category={singleMovie.category}
          imgproducto={singleMovie.imgproducto}
          price={singleMovie.price}
          stock={singleMovie.stock}
          />
        )
    })
  )
}

export default ItemList