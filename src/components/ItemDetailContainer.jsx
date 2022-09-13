import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState({})
    useEffect(()=>{

        const productos = [
            {"id":1, "nombre":"producto 1", "precio":100, "descripcion":"Este es el producto uno)", "stock":4,},
            {"id":2, "nombre":"producto 2", "precio":200, "descripcion":"Este es el producto dos", "stock":3},
            {"id":3, "nombre":"producto 3", "precio":300, "descripcion":"Este es el producto tres", "stock":5},
            {"id":4, "nombre":"producto 4", "precio":400, "descripcion":"Este es el producto cuatro", "stock":2}
        ];

        const getItem = new Promise((resolve) => {
            setTimeout(()=> {
                const producto = productos.find((e)=> e.id === 4)
                resolve(producto);
            }, 300);
        })

        getItem.then((respuesta) => {
            setItem(respuesta);
        });

    },[])
    

    return(
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;