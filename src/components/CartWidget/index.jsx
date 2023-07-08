import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import './style.css'
import { CartContext } from "../context/Cart"

const CartWidget = () => {
    const { nItemsCarrito } = useContext(CartContext)
    const nItems = nItemsCarrito()

    return (
        <Link to='/cart'>
            <div className="cart-widget">
                <i className="bi bi-cart-fill" ></i>
                <span className="badge text-white">{nItems}</span>
            </div>
        </Link>
    )
}
export { CartWidget }