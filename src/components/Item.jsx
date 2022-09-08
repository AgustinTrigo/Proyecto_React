import React from "react";
import ItemCount from "./ItemCount";

const Item = ({nombre, texto, precio, stock}) => {
    return (
        <div className="card">
            <div className="card__text">
                <h2>{nombre}</h2>
                <p>{texto}</p>
                <h3>precio: $ {precio}</h3>
            </div>
            <ItemCount var1={stock} var2={1}/>
        </div>
    )
}

export default Item;