import { Item } from '../Item'
import React from 'react'
import './itemList.css'

const ItemList = ({products = []}) => {
    return (
        <div className="listCard">
            {products.map(prod => <Item key={prod.id} info={prod} />)}
        </div>
        
    )
}

export { ItemList }