import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Checkout = () =>{

    const {cart, sumarTotal} = useContext(CartContext);


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
                <div className="checkout__detail--info">
                    <h4>TOTAL: $  {sumarTotal()}</h4>
                </div>
                {cart.map(e =>(
                    <div key={e.id} className="cart__items--container">
                        <div className="cart__items--img">
                            <img src={e.img} alt={e.nombre}/>
                        </div>
                        <div className="cart__items--data">
                            <div className="cart__items--data_nombre">
                                <h4>{e.nombre}</h4>
                            </div>
                            <div className="cart__items--data_info">
                                <h4>${e.precio}</h4>
                                <h4>x{e.cantidad}</h4>
                                <h4>$ {e.subtotal}</h4>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Checkout;