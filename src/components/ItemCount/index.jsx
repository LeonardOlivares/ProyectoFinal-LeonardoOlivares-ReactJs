import { useState, useEffect } from "react"
import './itemCount.css'
import React from "react"
import { Button } from "react-bootstrap"

const ItemCount =({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrementQuantity = () => {
        setCount(count - 1)
    }
    const incrementQuantity = () => {
        setCount(count + 1)
    }
    useEffect(()=>{
        setCount(parseInt(initial))
    }, [initial])

    return (
        <div className="counter">
            <Button className="btn-count" variant="dark" disabled={count <= 1} onClick={decrementQuantity}>-</Button>
            <span>{ count }</span>
            <Button className="btn-count" variant="dark" disabled={count >= stock} onClick={incrementQuantity}>+</Button>
            <div>
                <Button className="btn-count" variant="primary" disabled ={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}












/* const ItemCount = (initial, stock, onAdd) => {
    const [quantity, setQuantity] = useState(initial)

    const incrementQuantity = () =>{
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    
    const decrementQuantity = () =>{
        if (quantity > 1){
            setQuantity(quantity - 1)
    }
    }

    return (
        <div className="counter">
            <div className="controls">
                <button className="Btn" onClick={decrementQuantity}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Btn" onClick={incrementQuantity}>+</button>
            </div>
            <div>
                <button className="Btn" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>   
            </div>
        </div>
    )
} */

export { ItemCount }