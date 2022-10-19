import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import Formcheckout from "./Formcheckout";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

const Checkout = () =>{

    const {cart, sumarTotal, clear} = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [estadoCompra, setEstadoCompra] = useState(false);
    const total = sumarTotal();
    

    const sendOrders = (nombre, apellido, email) => {

        const orden = {
            buyer: {nombre, apellido, email},
            items: cart,
            total
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
            <CartDetail />
            :
            <div className="cart-bg checkout__compra">
                <p>Felicitaciones tu compra fue realizada con exito</p>
                <p>Copia el numero de orden e ingresa a {<Link to="/orders">"mi compra"</Link>} para ver el detalle de tu pedido.</p>
                <h4>N° ORDEN: </h4>
                <h4>{orderId}</h4>
            </div>
            }
        </div>
    )
}

export default Checkout;