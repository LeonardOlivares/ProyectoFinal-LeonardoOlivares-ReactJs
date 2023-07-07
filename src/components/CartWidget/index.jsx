import React from "react"
import { Link } from 'react-router-dom'
import './style.css'

const CartWidget = () =>{
    return (
    <Link to='/cart'>
        <div className="cart-widget">
           <i className="bi bi-cart-fill" ></i>
           <span className="badge text-white">nProductos</span>
       </div>
    </Link>
    )
}
export { CartWidget }