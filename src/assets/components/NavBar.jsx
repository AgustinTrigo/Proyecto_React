import React from "react";
import logo from "../img/logo-navbar.png"

const NavBar = () =>{
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo navbar" />
                <h2>+MAR PRODUCTOR SUSTEBLES</h2>
            </div>
            
            <ul className="navbar__list">
                <li><a href="#">inicio</a></li>
                <li><a href="#">catalogo</a></li>
                <li><a href="#">carrito</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;