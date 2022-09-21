import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartView = ({prop}) => {

    const {removeItem} = useContext(CartContext);

    return(
        <div className="cart__items--container">
            <div className="cart__items--img">
                <img src={prop.img} alt={prop.nombre}/>
            </div>
            <div className="cart__items--data">
                <div className="cart__items--data_nombre">
                    <h4>{prop.nombre}</h4>
                </div>
                <div className="cart__items--data_info">
                    <h4>$ {prop.precio}</h4>
                    <h4>{prop.cantidad}</h4>
                    <h4>$ {prop.precio}</h4>
                </div>
                <button className="cart__btn" onClick={()=>removeItem(prop)}><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default CartView;