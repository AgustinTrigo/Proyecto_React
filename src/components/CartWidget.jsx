import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const CartWidget = () =>{
    const {cantidadTotal} = useContext(CartContext);
    const totalUnidades = cantidadTotal();
    return (
        <div>
            <Link to="/cart"><i className="fa-solid fa-cart-shopping cartIcon"></i></Link><h4 className="cart__count">{totalUnidades}</h4>
        </div>

    )
}

export default CartWidget;