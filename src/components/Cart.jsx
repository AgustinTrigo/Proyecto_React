import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartView from "./CartView";

const Cart = () =>{

    const {cart, sumarTotal, clear} = useContext(CartContext);
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
                {cart.length === 0 ?
                <h3>SU CARRITO ESTA VACIO</h3>
                :
                (cart.map(item => (
                    <div key={item.id}>
                        <CartView props={item}/>
                    </div>)
                ))
                }
            </div>
            
            {cart.length !== 0 ?
                <div className="cart-bg cart__details">
                    <h4>TOTAL: {sumarTotal()}</h4>
                    <input type="button" className="card__btn added" value="vaciar carrito" onClick={()=>clear()} onChange={()=>{}}/>
                </div>
                :
                ""
            }   
            
        </div>
    )
}

export default Cart;