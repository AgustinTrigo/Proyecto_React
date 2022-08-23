import React from "react";
import logo from "./assets/img/logo.jpg";

const Header = () =>{
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo navbar"/>
            </div>
            <ul className="navbar__list">
                <li><a href="#">inicio</a></li>
                <li><a href="#">catalogo</a></li>
                <li><a href="#">carrito</a></li>
            </ul>
        </nav>
    )
}

export default Header;