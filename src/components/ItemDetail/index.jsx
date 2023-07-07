
import React, { useEffect, useState } from "react";
import './itemDetail.css'
import { useParams } from "react-router-dom";
import { getProductById } from "../data/data";
import { ItemCount } from "../ItemCount";

const ItemDetail = () =>{
    
    const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades`)
    }

    /* const { id } = useParams();
    
    const [ product, setProduct] = useState({})
    
    useEffect(() => {
        getProductById(id).then((product) => {
            setProduct(product);
        })       
    }, [id]) */
    
    
    
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






/* import React, { useEffect, useState, useContext} from "react";
import './itemDetail.css'
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../data/data";
import { ItemCount } from "../ItemCount";
import { CartContext } from "../context/Cart";

const ItemDetail = ({id,precio,stock,nombre,img,categoria,descripcion} ) =>{
    
    const[cantidadAgregada, setCantidadAgregada] = useState(0)
    const {addItem} = useContext(CartContext)
    const [ isCartClicked, setIsCartClicked] = useState(false)


    const onAdd = (quantity) => {
        setCantidadAgregada(quantity) 
        alert(`Compraste ${quantity} unidades`)

        const item ={id,nombre,precio,stock,img}
        addItem(item,quantity)
        setIsCartClicked(true)
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
        <div className="detailer">
        <div className="ladoA">
        <img src={img} alt={nombre}className="imgDetail"/>
        </div>
        <div className="ladoB">
        <h1 className="titleDetail">{nombre} </h1>
        <p>Categoria: {categoria}</p>
        <p>Descrición:{descripcion} </p>
        <h3>Precio: ${precio}</h3>
        <p>Stock disponible: {stock} unidades</p>
        <div>{cantidadAgregada > 0 ?( 
            <div>
                <Link to='/cart' className='btn btn-primary'>Ir a Pagar</Link>
                <Link to='/' className='btn btn-warning'>Volver al Catálogo</Link>
            </div>)
            :
            <div className="contadorDetail"><ItemCount initial={1} stock={stock} onAdd={onAdd}/></div>}</div>
        
        </div>
        </div>
        </>
    )


}
export { ItemDetail } */