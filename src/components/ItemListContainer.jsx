import { query, collection, getDocs, getFirestore, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () =>{
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {tipo} = useParams();
    
    useEffect(() => {
        
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = !tipo ? itemsCollection : query(itemsCollection, where("categoria", "==", tipo));
        getDocs(q).then((snapshot) =>{
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setLoading(false);
        })

    }, [tipo]);

    return (
        <>
            {loading ? <Loader /> : <ItemList items={items} />}
        </>
        
    )
}

export default ItemListContainer;