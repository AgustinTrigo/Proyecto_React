import { query, collection, getDocs, getFirestore, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () =>{
    
    const [items, setItems] = useState([]);
    const {tipo} = useParams();
    
    useEffect(() => {
        
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = !tipo ? itemsCollection : query(itemsCollection, where("categoria", "==", tipo));
        getDocs(q).then((snapshot) =>{
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })

    }, [tipo]);

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer;