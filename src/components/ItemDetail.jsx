import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    return(
        <div>
            {item.map(e => (
                <div key={e.id} className="card__detail">
                    <h2>{e.nombre}</h2>
                    <p>{e.descripcion}</p>
                    <h3>precio: $ {e.precio}</h3>
                    <ItemCount var1={e.stock} var2={1}/>
                </div>)
            )}
        </div>
    )
}

export default ItemDetail;