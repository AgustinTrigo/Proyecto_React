import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartView from "./CartView";
import { Link } from "react-router-dom";

const Cart = () =>{

    const {cart, sumarTotal, clear} = useContext(CartContext);
    return(
        <div className="cart__container">
            <div className="cart-bg cart__items">
                {cart.length !== 0 ?
                <div className="etiquetas">
                    <h5>Producto</h5>
                    <div>
                        <h5>Precio unitario</h5>
                        <h5>Cant.</h5>
                        <h5>Subtotal</h5>
                    </div>
                </div>
                :
                ""
                }   
                {cart.length === 0 ?
                <div className="mjs">
                    <h3>SU CARRITO ESTA VACIO</h3>
                    <Link to="/"><h5>VOLVER A LA TIENDA</h5></Link>
                </div>
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
                    <h4>TOTAL: $  {sumarTotal()}</h4>
                    <input type="button" className="card__btn added" value="vaciar carrito" onClick={()=>clear()} onChange={()=>{}}/>
                    <Link to="/checkout/"><input type="button" className="card__btn" value="iniciar compra"/></Link>
                </div>
                :
                ""
            }   
            
        </div>
    )
}

export default Cart;