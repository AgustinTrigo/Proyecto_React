import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{

    const onAdd = (count, prod) =>{
        console.log("Agregaste " + count + " " + prod)
    }

    console.log(item.nombre)
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
                    <ItemCount var1={item.stock} var2={1} funcion={onAdd} var4={item.nombre}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;