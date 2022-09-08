import React from "react";
import ItemCount from "./ItemCount";

const Item = ({nombre, texto, precio, stock}) => {
    return (
        <div className="card">
            <div >
                <h2>{nombre}</h2>
                <p>{texto}</p>
                <h2>PRECIO: $ {precio}</h2>
            </div>
            <ItemCount var1={stock} var2={1}/>
        </div>
    )
}

export default Item;