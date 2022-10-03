import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import Formcheckout from "./Formcheckout";

const Checkout = () =>{

    const {cart, sumarTotal, clear} = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [estadoCompra, setEstadoCompra] = useState(false);
    const total = sumarTotal();

    const sendOrders = (nombre, apellido, email) => {

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

        setEstadoCompra(true);
        clear()
    }
        

    return (
        <div className="checkout">
            {!estadoCompra ? <Formcheckout sendOrders={sendOrders}/> : ""}
            {!estadoCompra ?
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
            :
            <div className="cart-bg checkout__compra">
                <p>Felicitaciones tu compra fue realizada con exito</p>
                <h4>Nro. orden: {orderId} </h4>
            </div>
            }
        </div>
    )
}

export default Checkout;