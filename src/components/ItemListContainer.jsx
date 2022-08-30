import React from "react";

const ItemListContainer = (prop) =>{
    return(
        <div>
            <h2>CATALOGO</h2>
            <ul>
               <li>{prop.dato.nombre}</li>
               <li>{prop.dato.precio}</li>
            </ul>
        </div> 
    )
}

export default ItemListContainer;