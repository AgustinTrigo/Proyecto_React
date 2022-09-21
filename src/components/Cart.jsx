import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartView from "./CartView";

const Cart = () =>{

    const {cart} = useContext(CartContext);
    return(
        <div className="cart__container">
            <div className="cart cart__items">
                {cart.map(item => (
                    <div key={item.id}>
                        <CartView prop={item}/>
                    </div>)
                )}
            </div>
        </div>
    )
}

export default Cart;