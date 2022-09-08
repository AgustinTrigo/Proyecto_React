import React from "react";
import logo from "../assets/img/logo-navbar.png"
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo navbar" />
                <h2>+MAR</h2>
            </div>
            
            <ul className="navbar__list">
                <li>inicio</li>
                <li>catalogo</li>
                <li>carrito</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;