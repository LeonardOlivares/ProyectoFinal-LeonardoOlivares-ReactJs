import { Item } from '../Item'
import React from 'react'
import './itemList.css'

const ItemList = ({items}) => {
    return (
        <div className="listCard">
            {items.map((item) =>{
                 <Item key={item.id} {...item} textButton="Ver detalles"/>}
                 )}
        </div>
        
    )
}

export { ItemList }