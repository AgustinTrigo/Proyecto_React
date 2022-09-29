import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";

const Checkout = () =>{

    const {cart, sumarTotal} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const total = sumarTotal();
    const sendOrders = () => {


        const orden = {
            buyer: {nombre, apellido, email},
            items: cart,
            total,
        }

        const db = getFirestore();
        const refOrder = collection(db, "orders")
        addDoc(refOrder, orden).then((res)=>{
            setOrderId(res.id);
        })

        console.log(orderId)

    }
        

    return (
        <div className="checkout">
            <form className="cart-bg checkout__form">
                <label htmlFor="nombre">NOMBRE</label>
                <input name="nombre" type="text" placeholder="  Ingresa tu nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
                <label htmlFor="apellido">APELLIDO</label>
                <input name="apellido" type="text" placeholder="  Ingresa tu apellido" onChange={(e)=>{setApellido(e.target.value)}}/>
                <label htmlFor="email">EMAIL</label>
                <input name="email" type="text" placeholder="  ejemplo@hotmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="button" className="checkout__btn" value="finalizar compra" onClick={()=>sendOrders()}/>
            </form>
            <div className="cart-bg checkout__detail">
                <div className="checkout__detail--info">
                    <h4>TOTAL</h4>
                    <h4>$ {total}</h4>
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