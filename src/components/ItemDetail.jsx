import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{

    const {addToCart, removeItem} = useContext(CartContext);

    const onAdd = (count) =>{
        if(count <= item.stock){
            item.stock = item.stock - count;
            addToCart(item, count);
        }
    }

    const sacar = () =>{
        removeItem(item);
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
                    <h4 onClick={sacar}>{item.nombre}</h4>
                    <h4>precio: $ {item.precio}</h4>
                    <ItemCount var1={item.stock} var2={1} funcion={onAdd} var4={item.nombre}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;