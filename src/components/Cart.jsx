import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Cart = () =>{

    const {cart} = useContext(CartContext);

    console.log(cart);


    return(
        <div className="cart__container">
            <div className="cart cart__items">
                {cart.map(item => (
                    <div key={item.id}  className="cart__items--container">
                        <h4>{item.nombre}</h4>
                        <h4>PRECIO: {item.precio}</h4>
                        <h4>{item.cantidad}</h4>
                    </div>)
                )}
            </div>
            <div className="cart cart__details"></div>
        </div>
    )
}

export default Cart;