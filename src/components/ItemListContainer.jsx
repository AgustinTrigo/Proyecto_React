import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (prop) =>{
    return(
        <div>
            <div className="card">
                <h2>{prop.dato.nombre}</h2>
                <h2>PRECIO: {prop.dato.precio}</h2>
                <h2>CANTIDAD:</h2>
                <ItemCount var1={prop.dato.stock} var2={prop.dato.inicial} />
            </div>
        </div> 
    )
}

export default ItemListContainer;