import { getDocs, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DetalleMiCompra from "./DetalleMiCompra";
import MiCompra from "./MiCompra";

const Orders = () =>{

    const [orders, setOrders] = useState();
    const [miCompra, setMiCompra] = useState();

    useEffect(()=>{
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        getDocs(ordersCollection).then((snapshot) =>{
            setOrders((snapshot.docs.map((e)=>({id: e.id, ...e.data()}))))
        })
    },[])

    const filtrarOrdenes = (orders, nombre, orderNbr) => {
        orders.find(e => {
            if((e.buyer.nombre === nombre) && (e.id === orderNbr)){
                return setMiCompra(e);
            }else{
                return false;
            }
        })
    }

    return(
        <>
            {miCompra === undefined ? <MiCompra filtrarOrdenes={filtrarOrdenes} orders={orders}/> : <DetalleMiCompra miCompra={miCompra}/> }
        </>
    )
}

export default Orders;