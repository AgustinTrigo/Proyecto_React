import React from "react";

const CartView = ({prop}) => {
    return(
        <>
            <div className="cart__items--container">
                <div>
                    <img src={prop.img} alt={prop.nombre}/>
                </div>
                <div>
                    <h4>{prop.nombre}</h4>
                    <h4>{prop.precio}</h4>
                    <h4>{prop.cantidad}</h4>
                </div>

            </div>
            <div className="cart cart__details"></div>
        </>
    )
}

export default CartView;