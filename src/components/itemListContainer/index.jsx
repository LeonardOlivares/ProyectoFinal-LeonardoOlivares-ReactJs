import React, { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { useParams } from "react-router-dom";
/* import { getItems } from '../services' */
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = ({ greeting }) => {
    
    const { category } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const itemsRef = collection(db, "items")
        getDocs(itemsRef).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) =>({ id: doc.id, ...doc.data() })))
        })
    }, [])

    

   /*  useEffect(() =>{
        if (category) {
            getProductsByCategory(category).then((products) => {
                setProducts(products)
            })
        }
       else {
            getProducts().then((products) =>{
                setProducts(products)
            })
       }
    }, [category])
    
     */
    
    return (
        <>        
            <h1> { greeting }</h1>
            <ItemList items={products} />
        </>
)
}

export { ItemListContainer } 


//IGNORAR DE AQUI HACIA ABAJO


/* import React, { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { getProducts, getProductsByCategory } from "../data/data"
import { getProducts } from '../../services'
import { useNavigate, useParams } from "react-router-dom";
import './style.css'


const ItemListContainer = ({ greeting }) => {
    
    const { categoryId } = useParams();
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
    getProducts().then((data) => {
            setProducts(data)
        })

    }, []) 
    
    if (category) {
        getProductsByCategory(category).then((products) => {
            setProducts(products)
        })
    }
   else {
        getProducts().then((products) =>{
            setProducts(products)
        })
   } 
    
    
    return (
        <>        
            <h1> { greeting }</h1>
            <ItemList products={products} />
        </>
)
}

export { ItemListContainer }  */