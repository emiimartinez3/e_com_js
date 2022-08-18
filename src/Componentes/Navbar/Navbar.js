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
                    <Link to={"/"} className="nav-link">Inicio</Link>
                    <Link to={`/categoria/Mangas`} className="nav-link">Mangas</Link>
                    <Link to={`/categoria/Novelas`} className="nav-link">Novelas</Link>
                    <Link to={`/categoria/Comics`} className="nav-link">Comics</Link>
                    <Link to={"#"} className="nav-link">Contacto</Link>
                    <BtnCarrito />
                </nav>
                   

        </header>
    )
}

export default Navbar;