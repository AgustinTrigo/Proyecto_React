import React from "react";
//import ItemCount from "./ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () =>{
    
    const [items, setItems] = useState([]);
    useEffect(() => {
        const productos = [
           {"id":1, "nombre":"producto 1", "precio":100, "descripcion":"Este es el producto uno)", "stock":4},
           {"id":2, "nombre":"producto 2", "precio":200, "descripcion":"Este es el producto dos", "stock":3},
           {"id":3, "nombre":"producto 3", "precio":300, "descripcion":"Este es el producto tres", "stock":5},
           {"id":4, "nombre":"producto 4", "precio":400, "descripcion":"Este es el producto cuatro", "stock":2}
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });

    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;