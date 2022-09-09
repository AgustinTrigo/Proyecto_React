import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState([])
    useEffect(()=>{

        const productos = [
            {"id":1, "nombre":"producto 1", "precio":100, "descripcion":"Este es el producto uno", "stock":4}
        ];

        const getItem = new Promise((resolve) => {
            setTimeout(()=> {
                resolve(productos);
            }, 2000);
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