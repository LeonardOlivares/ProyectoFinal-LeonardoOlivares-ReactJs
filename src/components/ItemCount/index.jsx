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
            <span className="Ncantidad">{ count }</span>
            <Button className="btn-count" variant="dark" disabled={count >= stock} onClick={incrementQuantity}>+</Button>
            <div>
                <Button className="btn-count" variant="primary" disabled ={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export { ItemCount }