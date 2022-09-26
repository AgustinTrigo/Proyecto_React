import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{

        const db = getFirestore();

        const item = doc(db, "items", id);
        getDoc(item).then((snapshot)=>{
            if(snapshot.exists()){
                setItem({id: snapshot.id, ...snapshot.data()});
            }
        })

    },[id])
    

    return(
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;