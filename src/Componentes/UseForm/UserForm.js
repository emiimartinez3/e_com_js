import React from 'react'
import "./UserForm.css";
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext' //esta bien
import { useContext } from 'react';
import dataBaseFS from '../../services/firestore';
import { addDoc, collection} from "firebase/firestore";
import Button from '../../Button/Button';

export const UserForm = () => {
  const {cart, totalPrice}= useCartContext();

  const [ orderId, setOrderId] = useState(false)

    const [userData, setUserData] = useState({
        email: "",
        name: "", 
        telefono: ""
    });

    const ordenCompra={
      buyer:{...userData},
      item: [...cart],
      price: totalPrice(),
    }

     async function handleSubmit(e){
      e.preventDefault();

      const collectionDB = collection(dataBaseFS, "orders");
      const docRef = await addDoc(collectionDB, ordenCompra);
      console.log(docRef);

      setUserData({
        email: "",
        name: "",
        phone: ""
    });
    setOrderId(docRef.id)
    }

    
    const changeInput= (e)=>{
      const input= e.target;
      const value= input.value;
      const inputName = input.name

      let copyUserData = {...userData}

      copyUserData[inputName] = value;
      setUserData(copyUserData);
      console.log(copyUserData);
  }
  
  if(orderId){
    return(
    <div className='gracias-c'>
      <h1 className='gracias'>Gracias por tu compra!!!</h1>
      <p className='gracias'>El id de seguimiento de tu conmpra es: {orderId}</p>
    </div>
  );}
  
  return (
    <div className="form-container">
      <form  onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name" className='tt'>Nombre</label>
          <input
            value={userData.name}
            onChange={changeInput}
            name="name"
            type="text"
            placeholder="Nombre"
            required
            className='in'
          />
        </div>

        <div className="form-item">
          <label htmlFor="telefono" className='tt'>Telefono</label>
          <input
            value={userData.telefono}
            onChange={changeInput}
            name="telefono"
            type="text"
            placeholder="Telefono"
            required
            className='in'
          />
        </div>

        <div className="form-item">
          <label htmlFor="email" className='tt'>Email</label>
          <input
            value={userData.email}
            onChange={changeInput}
            name="email"
            type="text"
            placeholder="Correo"
            required
            className='in'
          />
        </div>

        <div>
          <Button type="submit" onTouch={handleSubmit}>
            Finalizar Compra
          </Button>
        </div>
      </form>
    </div>
  );
}