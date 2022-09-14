import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    return(
        <div className="card__detail">
            <div className="card__detail--container">
                <div className="card__detail--img">
                    <img src={item.img} alt={item.nombre}/>
                </div>
                <div className="card__detail--info">
                    <p>{item.descripcion}</p>
                </div>
                <div className="card__detail--inputs">
                    <h4>{item.nombre}</h4>
                    <h4>precio: $ {item.precio}</h4>
                    <ItemCount var1={item.stock} var2={1}/>
                    <input className="card__btn" type="button" value="add to cart" /> 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;