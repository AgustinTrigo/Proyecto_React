import React from "react";
import { useState } from "react";

const MiCompra = ({filtrarOrdenes, orders, validacion}) =>{

    const [nombre, setNombre] = useState("");
    const [orderNbr, setOrderNbr] = useState("");

    const validarCampos = (orders, nombre, orderNbr) => {
        filtrarOrdenes(orders, nombre, orderNbr);
    }

    return(
        <div className="container">
            
            <div className="buscador">
                <p>Ingresa los datos para ver tu compra</p>
                <label htmlFor="nombre">NOMBRE</label>
                <input name="nombre" type="text" onChange={(e)=>{setNombre(e.target.value)}}/>
                <label htmlFor="orderNbr">ORDEN #</label>
                <input name="orderNbr" type="text" onChange={(e)=>{setOrderNbr(e.target.value)}}/>
                <input type="button" className="card__btn" value="BUSCAR" onClick={()=>validarCampos(orders, nombre, orderNbr)}/>
                {!validacion ? "" : <h6 className="mensajeError">nombre o numero de orden incorrecto</h6>}
            </div>
        </div>
    )
}

export default MiCompra;