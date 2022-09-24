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
            {"id":4, "nombre":"cepillo de dientes", "precio":400, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":2, "img":"../imagenes/cepillos_dientes.jpg", "categoria":"baño"},
            {"id":5, "nombre":"shampoo solido", "precio":500, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":2, "img":"../imagenes/shampoo_solido.jpg", "categoria":"baño"},
            {"id":6, "nombre":"jabonera madera", "precio":100, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":2, "img":"../imagenes/jabonera_madera.jpg", "categoria":"baño"},
            {"id":7, "nombre":"hilo dental", "precio":800, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":2, "img":"../imagenes/hilo_dental.jpg", "categoria":"personal"},
            {"id":8, "nombre":"sorbete reutilizable", "precio":200, "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis.", "stock":2, "img":"../imagenes/sorbete_reutilizable.jpg", "categoria":"cocina"},
        ];

        let categoria = tipo;

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 500);
        });

        getProductos.then((respuesta) => {
            if(tipo === undefined){
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