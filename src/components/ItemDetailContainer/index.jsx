import React, { useEffect, useState } from "react"
import "./itemDetailContainer.css"
import { ItemDetail } from "../ItemDetail"
import { getDoc, doc, getFirestore } from 'firebase/firestore' 
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const itemRef = doc(db, "items", id)
        getDoc(itemRef).then(res => setProduct({id: res.id, ...res.data()}))
    },[id])
    
    return (
        <>
        
        <div className="contenedor">
            <ItemDetail item= {product} />
        </div>
        </>
    );
};
export { ItemDetailContainer }
