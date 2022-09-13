import React from "react";
import ItemCount from "./ItemCount";
//import img from "../assets/img/hisopos.jpg"

const ItemDetail = ({item}) =>{
    return(
        <div className="card__detail">
            <div className="card__detail--container">
                <div className="card__detail--img">
                    <h2>{item.nombre}</h2>
                </div>
                <div className="card__detail--text">
                    <p>{item.descripcion}</p>
                </div>
                <div className="card__detail--inputs">
                    <h3>precio: $ {item.precio}</h3>
                    <ItemCount var1={item.stock} var2={1}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;