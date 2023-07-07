import React, { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { LoadingSpinner } from "../loadingSpinner";



const ItemListContainer = ({ greeting }) => {
     
    const [products, setProducts] = useState([])
    const {categoryId}  = useParams()
    
    useEffect(() =>{
        const db = getFirestore()
        const queryCollection = collection(db, "items")
        if(categoryId){
            const queryFilter = query(queryCollection, where("categoria", "==", categoryId))
            getDocs(queryFilter).then(res => setProducts(res.docs.map(item => ({id: item.id, ...item.data()}))))
        } else {
            getDocs(queryCollection).then(res => setProducts(res.docs.map(item =>({id: item.id, ...item.data()}))))
        }

    },[categoryId])

  

    
    return (
        <>        
            <h1> { greeting }</h1>
            {products.length > 0 ? (
            <ItemList items={products} />)
            :
            (<LoadingSpinner text={"Cargando tienda..."}/>)
        }
        </>
)
}

export { ItemListContainer } 
