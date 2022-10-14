import React from "react";

const Orders = () =>{
    return(
        <div className="container">
            <div className="buscador">
                <p>Ingresa los datos para ver tu compra</p>
                <label htmlFor="nombre">NOMBRE</label>
                <input name="nombre" type="text"/>
                <label htmlFor="orderNbr">ORDEN #</label>
                <input name="orderNbr" type="text"/>
                <input type="button" className="card__btn" value="BUSCAR"/>
            </div>
            
        </div>
    )
}

export default Orders;