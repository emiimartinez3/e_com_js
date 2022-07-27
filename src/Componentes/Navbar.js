import React from "react";
/*import { FaUserCircle } from "react-icons/fa";*/
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="header">
        
            <div className="logo">
                <img src="/Multimedia/Rocket-Comics.jpg" alt="logo" className="rocket" />
            </div>
                 
            <nav className="nav-items">
                <a href="#" className="nav-link">Inicio</a>
                <a href="#" className="nav-link">Mangas</a>
                <a href="#" className="nav-link">Novelvas</a>
                <a href="#" className="nav-link">Comics</a>
                <a href="#" className="nav-link">Contacto</a>
                <a href="#" className="nav-link"><FaShoppingBag/></a>
            </nav>

        </header>
    )
}

export default Navbar;