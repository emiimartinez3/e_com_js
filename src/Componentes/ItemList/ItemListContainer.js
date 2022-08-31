import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import itemsData from '../../datos/data';
import ItemList from '../ItemList/ItemList';
import dataBaseFS from '../../services/firestore';
import { getDocs, collection, query, where} from 'firebase/firestore'


function getProducts() {
  return new Promise ( (resolve) => {
    const productosCollection = collection (dataBaseFS, "productos");

    getDocs(productosCollection).then( docsSnapshot => {
     const docsData = docsSnapshot.docs.map( doc => {
      return{...doc.data(), id: doc.id}
    });
     resolve(docsData);
    })
  })
}

function itemsFromIdCategory(categoria) {

  return new Promise((resolve) => {
    const produCollection = collection(dataBaseFS, "productos");
    const queryProducts = query(produCollection, where("category", "==", categoria))
    getDocs(queryProducts).then(snapshot => {
      const docsData = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      });
      resolve(docsData);
      console.log(docsData)
    });
  });
};

function ItemListContainer() {
   
    const [data, setData] = useState ([]);

    const category = useParams().idCategory; 

    useEffect(() => { 

      if (category) {
        itemsFromIdCategory(category).then((resolve) => {
          setData(resolve)
        });
  
      } else {
        getProducts().then((resolve) =>{
          setData(resolve) 
        });
      }
    }, [category]);
             
                /*let itemFiltre = itemsData.filter((elemento)=> elemento.category === category);
                getProducts()
                .then((respuesta) => {
                 ( category == undefined ) ? setData( respuesta) : setData(itemFiltre);     
    });
  },[category]); */

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

