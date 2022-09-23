import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartView = ({props}) => {

    const {removeItem} = useContext(CartContext);

    return(
        <div className="cart__items--container">
            <div className="cart__items--img">
                <img src={props.img} alt={props.nombre}/>
            </div>
            <div className="cart__items--data">
                <div className="cart__items--data_nombre">
                    <h4>{props.nombre}</h4>
                </div>
                <div className="cart__items--data_info">
                    <h4>$ {props.precio}</h4>
                    <h4>{props.cantidad}</h4>
                    <h4>$ {props.subtotal}</h4>
                </div>
                <button className="cart__btn" onClick={()=>removeItem(props)}><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default CartView;