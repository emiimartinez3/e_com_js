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

    const [userData, setUserData] = useState({
        email: "",
        name: "", 
        telefono: ""
    });

    const ordenCompra={
      buyer:{...userData},
      item: [...cart],
      price: totalPrice(),
      //date: new Date()
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
    console.log(ordenCompra);
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
  
  return (
    <div className="form-container">
      <form  onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={userData.name}
            onChange={changeInput}
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={userData.telefono}
            onChange={changeInput}
            name="telefono"
            type="text"
            placeholder="Telefono"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={changeInput}
            name="email"
            type="text"
            placeholder="Correo"
            required
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