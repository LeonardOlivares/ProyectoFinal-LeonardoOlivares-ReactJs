import React, { useEffect, useState } from "react";
import './itemDetail.css'
import { useParams } from "react-router-dom";
import { getProductById } from "../data/data";
import { ItemCount } from "../ItemCount";

const ItemDetail = () =>{
    
    const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades`)
    }

    const { id } = useParams();

    const [ product, setProduct] = useState({})

    useEffect(() => {
        getProductById(id).then((product) => {
            setProduct(product);
        })       
    }, [id])



    return (
        <>
        <h1>Detalle de { product.nombre } </h1>
        <p>Categoria: {product.categoria}</p>
        <img src={product.img} alt={product.nombre} />
        <h3>Precio: ${product.precio}</h3>
        <p>Stock disponible: {product.stock} unidades</p>
        <div className="contadorDetail"><ItemCount initial={1} stock={product.stock} onAdd={onAdd}/></div>
        </>
    )


}
export { ItemDetail }