import React, {useEffect, useState} from 'react'
import ItemDitail from './ItemDitail';



const reDitail = {
    id: 1,
    imgg: "/Multimedia/Manga/btooom-01.jpg",
    title: "B-TOOOM",
    price: 1250,
    description:"Ryōta Sakamoto es un joven desempleado de 22 años de edad que vive con su madre y su padrastro.En el mundo real, puede no haber nada realmente especial acerca de él, pero en línea, es uno de los mejores jugadores del mundo del juego de combate llamado Btooom!"
};

export const ItemDitailContainer = ()=> {
  
  const [data,setData] = useState({})

  useEffect(()=>{
    const getData = new Promise(resolve => {
        setTimeout(()=> {
            resolve(reDitail)
        }, 3000)
    })
    getData.then(resultado => setData(resultado))
  }, [])

  return (
   <ItemDitail data={data}/> 
  )
}

export default ItemDitailContainer
