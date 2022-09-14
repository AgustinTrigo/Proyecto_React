import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{

        const productos = [
            {"id":"1", "nombre":"acondicionador solido", "precio":100, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":4, "img":"../imagenes/acondicionador_solido.jpg", "categoria":"baño"},
            {"id":"2", "nombre":"esponja vegetal", "precio":200, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":3, "img":"../imagenes/esponja_vegetal.jpg", "categoria":"cocina"},
            {"id":"3", "nombre":"maquina de afeitar", "precio":300, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":5, "img":"../imagenes/maquina_afeitar.jpg", "categoria":"personal"},
            {"id":"4", "nombre":"cepillo de dientes", "precio":400, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":2, "img":"../imagenes/cepillos_dientes.jpg", "categoria":"baño"}
        ];

        const getItem = new Promise((resolve) => {
            setTimeout(()=> {
                resolve(productos);
            }, 300);
        })

        getItem.then((respuesta) => {
            const producto = respuesta.find((e)=> e.id === id)
            console.log(producto)
            setItem(producto);
        });

    },[id])
    

    return(
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;