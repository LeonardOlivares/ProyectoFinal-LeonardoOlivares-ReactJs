import React, { useEffect, useState } from "react"
import "./itemDetailContainer.css"
import { ItemDetail } from "../ItemDetail"
import { getDoc, doc, getFirestore } from 'firebase/firestore' 
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
const db = getFirestore()
const [product, setProduct] = useState(undefined)
const [loading, setLoading] = useState(true)
const { itemId } = useParams()

useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "items", itemId)
    getDoc(docRef)
        .then((response) => {
            const data = response.data();
            const product = { itemId: response.id, ...data }
            setProduct(product);
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
}, [itemId])


    return (
        <>
            <ItemDetail {...product} />
        </>
    );
};
export { ItemDetailContainer }
