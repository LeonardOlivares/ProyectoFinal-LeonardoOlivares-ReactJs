import React from "react";
import './item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'



const Item = ({nombre, id, precio, img, textButton}) =>{

    /* const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades`)
    } */
    return (
        <Card className="cardItem" style={{ width: '18rem' }}>
        <Card.Img className="itemImg" variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
            ${precio}
            </Card.Text>
            <Link to={`/tienda/${id}`}><Button variant="outline-secondary">{textButton}</Button></Link>
        </Card.Body>
        </Card>
        
        )
        
        
    }

export { Item }

