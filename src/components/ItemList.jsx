import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="container">
            {items.map(item => (
                <div key={item.id} >
                    <Item nombre={item.nombre} texto={item.descripcion} precio={item.precio} stock={item.stock}/>
                </div>)
            )}
        </div>
    )
}

export default ItemList;