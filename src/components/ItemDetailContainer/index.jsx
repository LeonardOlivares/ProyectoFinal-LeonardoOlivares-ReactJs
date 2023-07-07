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
    
   /*  useEffect(() =>{
        
    const db = getFirestore()
    const itemRef = doc(db, "items", id)
    getDoc(itemRef).then(res => {
        const data = res.data()
        const itemAdapt = {id: res.id, ...data}
        setProduct(itemAdapt)
    })
}, [id]) */


/* 
const [loading, setLoading] = useState(true)
const { id } = useParams()

useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "items", id)
    getDoc(docRef)
        .then((response) => {
            const data = response.data();
            const product = { id: response.id, ...data }
            setProduct(product);
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
}, [id]) */


    return (
        <>
        <div className="contenedor">
            <ItemDetail item= {product} />
        </div>    
        </>
    );
};
export { ItemDetailContainer }
