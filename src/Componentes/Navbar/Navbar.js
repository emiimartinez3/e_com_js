import React from "react";
import BtnCarrito from "../BtnCarrito/BtnCarrito";
import "./Navbar.css";
import { Link } from "react-router-dom"

function Navbar () {
    return (
        <header className="header">
        
            <div className="logo">
                <img src="/Multimedia/Rocket-Comics.jpg" alt="logo" className="rocket" />
            </div>
            
                <nav className="nav-items">
                    <Link to={"/"} className="nav-link">Productos</Link>
                    <Link to={`/contacto`} className="nav-link">Contacto</Link>
                    <BtnCarrito />
                </nav>
                   

        </header>
    )
}

export default Navbar;