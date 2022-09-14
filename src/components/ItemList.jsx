import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="galeria">
            {items.map(item => (
                <div key={item.id} >
                    <Item id={item.id} nombre={item.nombre} precio={item.precio} img={item.img}/>
                </div>)
            )}
        </div>
    )
}

export default ItemList;