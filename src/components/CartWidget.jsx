import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartWidget = () =>{
    const {cantidadTotal} = useContext(CartContext);
    const totalUnidades = cantidadTotal();
    return (
        <>
            <div><i className="fa-solid fa-cart-shopping cartIcon"></i><h4 className="cart__count">{totalUnidades}</h4></div>
            
        </>

    )
}

export default CartWidget;