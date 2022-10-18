import { getDocs, where, query, collection, getDoc, getFirestore } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MiCompra from "./MiCompra";

const Orders = () =>{

    const [orders, setOrders] = useState();

    useEffect(()=>{
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        getDocs(ordersCollection).then((snapshot) =>{
            setOrders((snapshot.docs.map((e)=>({id: e.id, ...e.data()}))))
        })
    },[])

    const filtrarOrdenes = (orders, nombre, orderNbr) => {
        console.log(orders);
        console.log(nombre);
        console.log(orderNbr);
        console.log(orders.find(e =>{if((e.buyer.nombre === nombre) && (e.id === orderNbr)){return e}}))
    }

    return(
        <MiCompra filtrarOrdenes={filtrarOrdenes} orders={orders}/>
    )
}

export default Orders;