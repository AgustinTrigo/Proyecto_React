import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{

    const {addToCart} = useContext(CartContext);
    

    const onAdd = (count) =>{
        addToCart(item, count);
    }

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
                    <h4>$ {item.precio}</h4>
                    <ItemCount stock={item.stock} valorInicial={1} addCart={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;