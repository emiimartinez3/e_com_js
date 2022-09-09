import React, {useEffect, useState} from 'react'
import ItemDitail from '../ItemDitail/ItemDitail';
import itemsData from '../../datos/data';
import { useParams } from 'react-router-dom'
import { getDoc, collection, doc } from 'firebase/firestore';
import dataBaseFS from '../../services/firestore';


const ItemDitailContainer = () => {
 
  const getProducto = () => {
  return new Promise ((resolve) => {


    const collectionRef = collection(dataBaseFS, "productos");
    const docRef = doc(collectionRef, id);

    getDoc(docRef).then( snapshot => {
        resolve(
          { ...snapshot.data(), id: snapshot.id} 
        )
    });    
   });
  };

  const [data,setData] = useState([]);
  const {id} = useParams();
   
  useEffect (()=> {
    getProducto(id)
    .then((respuesta) => setData(respuesta));
  }, [id])

  return (
   <ItemDitail data={data}
   /> 
  )
}

export default ItemDitailContainer
