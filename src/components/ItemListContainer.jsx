import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () =>{
    
    const [items, setItems] = useState([]);
    const {tipo} = useParams();
    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"acondicionador solido", "precio":100, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":4, "img":"../imagenes/acondicionador_solido.jpg", "categoria":"baño"},
            {"id":2, "nombre":"esponja vegetal", "precio":200, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":3, "img":"../imagenes/esponja_vegetal.jpg", "categoria":"cocina"},
            {"id":3, "nombre":"maquina de afeitar", "precio":300, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":5, "img":"../imagenes/maquina_afeitar.jpg", "categoria":"personal"},
            {"id":4, "nombre":"cepillo de dientes", "precio":400, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":2, "img":"../imagenes/cepillos_dientes.jpg", "categoria":"baño"}
        ];

        let categoria = "";
        console.log()
        
        switch(tipo){
            case "cocina":
                categoria = "cocina";
            break
            case "baño":
                categoria = "baño";
            break
            case "personal":
                categoria = "personal";
            break
            default:
        }

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 500);
        });

        getProductos.then((respuesta) => {
            if(categoria === ""){
                setItems(respuesta)
            }else{
                const productoFiltrado = respuesta.filter(e => e.categoria === categoria);
                setItems(productoFiltrado);
            }
        });

    }, [tipo]);

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer;