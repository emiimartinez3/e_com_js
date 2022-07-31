import React from "react";
import {FaShoppingBag} from "react-icons/fa";
import "./Card.css";

function Card(props) {

    return (
          <div className="product-box">
            <img src={props.producto.imgproducto} alt="producto" className="product-img"></img>
            <h2 className="product-title">{props.producto.name}</h2>
            <span className="price">${props.producto.precio}</span>
            <button className="add-cart"><FaShoppingBag/></button>
          </div>
    );
}

export default Card;