import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import './style.css'
import { CartContext } from "../context/Cart"

const CartWidget = () =>{
    const { cartProducts } = useContext(CartContext)


    return (
    <Link to='/cart'>
        <div className="cart-widget">
           <i className="bi bi-cart-fill" ></i>
           <span className="badge text-white">{cartProducts.lenght} Productos</span>
       </div>
    </Link>
    )
}
export { CartWidget }