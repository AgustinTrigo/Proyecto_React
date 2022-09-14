import React from "react";
import logo from "../assets/img/logo-navbar.png"
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo navbar" />
                <h2><Link className="navbar__logo--link" to="/">+MAR</Link></h2>
            </div>
            
            <ul className="navbar__list">
                <li><Link to="/categorias/cocina">cocina</Link></li>
                <li><Link to="/categorias/baño">baño</Link></li>
                <li><Link to="/categorias/personal">personal</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;