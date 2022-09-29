import React from "react";
import { useState } from "react";

const Formcheckout = ({sendOrders}) =>{

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    

    return(
        <form className="cart-bg checkout__form">
            <label htmlFor="nombre">NOMBRE</label>
            <input name="nombre" type="text" placeholder="  Ingresa tu nombre" onChange={(e)=>{setNombre(e.target.value)}}/>

            <label htmlFor="apellido">APELLIDO</label>
            <input name="apellido" type="text" placeholder="  Ingresa tu apellido" onChange={(e)=>{setApellido(e.target.value)}}/>

            <label htmlFor="email">EMAIL</label>
            <input name="email" type="text" placeholder="  ejemplo@hotmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
            
            <input type="button" className="checkout__btn" value="finalizar compra" onClick={()=>sendOrders(nombre, apellido, email)}/>
        </form>
    )
}

export default Formcheckout;