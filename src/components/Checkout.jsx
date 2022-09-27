import React from "react";

const Checkout = () =>{
    return (
        <div className="checkout">
            <form className="cart-bg checkout__form">
                <label for="nombre">NOMBRE</label>
                <input name="nombre" type="text" placeholder="Ingresa tu nombre"/>
                <label for="apellido">APELLIDO</label>
                <input name="apellido" type="text" placeholder="Ingresa tu apellido"/>
                <label for="email">EMAIL</label>
                <input name="email" type="text" placeholder="ejemplo@hotmail.com"/>
                <input type="button" className="checkout__btn" value="comprar"/>
            </form>
            <div className="cart-bg checkout__detail">
            </div>
        </div>
    )
}

export default Checkout;