import React, { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { getProducts, getProductsByCategory } from "../data/data"
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    
    const { category } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() =>{
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
    
    
    
    return (
        <>        
            <h1> { greeting }</h1>
            <ItemList products={products} />
        </>
)
}

export { ItemListContainer } 