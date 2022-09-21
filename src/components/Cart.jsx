import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartView from "./CartView";

const Cart = () =>{

    const {cart} = useContext(CartContext);
    
    return(
        <div className="cart__container">
            <div className="cart-bg cart__items">
                {/* <div className="etiquetas">
                    <h5>Producto</h5>
                    <div>
                        <h5>Precio unitario</h5>
                        <h5>Cant.</h5>
                        <h5>Subtotal</h5>
                    </div>
                </div> */}
                {cart.map(item => (
                    <div key={item.id}>
                        <CartView prop={item}/>
                    </div>)
                )}
            </div>
            <div className="cart-bg cart__details"></div>
        </div>
    )
}

export default Cart;