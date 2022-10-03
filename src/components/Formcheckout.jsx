import React from "react";
import { useState } from "react";

const Formcheckout = ({sendOrders}) =>{

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [nombreVacio, setNombreVacio] = useState(false);
    const [apellidoVacio, setApellidoVacio] = useState(false);
    const [emailVacio, setEmailVacio] = useState(false);
    
    const validarCampos = (nombre, apellido, email) =>{
        if((nombre === "")){
           setNombreVacio(true)
        }else if(apellido === "") {
            setApellidoVacio(true)
        }else if(email === ""){
            setEmailVacio(true)
        }else{
            sendOrders(nombre, apellido, email);
        }
    }
    

    return(
        <form className="cart-bg checkout__form">
            <label htmlFor="nombre">NOMBRE</label>
            <input name="nombre" type="text" placeholder="  Ingresa tu nombre" onChange={(e)=>{setNombre(e.target.value)}}/>{!nombreVacio ? "" : <i className="fa-solid fa-circle-exclamation alert"></i>}
            <label htmlFor="apellido">APELLIDO</label>
            <input name="apellido" type="text" placeholder="  Ingresa tu apellido" onChange={(e)=>{setApellido(e.target.value)}}/>{!apellidoVacio ? "" : <i className="fa-solid fa-circle-exclamation alert"></i>}
            <label htmlFor="email">EMAIL</label>
            <input name="email" type="text" placeholder="  ejemplo@hotmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>{!emailVacio ? "" : <i className="fa-solid fa-circle-exclamation alert"></i>}
            <input type="button" className="checkout__btn" value="finalizar compra" onClick={()=> validarCampos(nombre, apellido, email)}/>
        </form>
    )
}

export default Formcheckout;