import React from "react";
import './item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from "../ItemCount"
import { Link } from 'react-router-dom'



const Item = ({info}) =>{

    const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades`)
    }
    return (
        <Card className="cardItem" style={{ width: '18rem' }}>
        <Card.Img className="itemImg" variant="top" src={info.img} />
        <Card.Body>
            <Card.Title>{info.nombre}</Card.Title>
            <Card.Text>
            ${info.precio}
            </Card.Text>
            <ItemCount initial={1} stock={info.stock} onAdd={onAdd}/>
            <Link to={`/tienda/${info.id}`}><Button variant="outline-secondary">Ver detalle</Button></Link>
        </Card.Body>
        </Card>
        
        )
        
        
    }

export { Item }

/* <div className="cardItem">
    <header className="">
        <h4 className="card-title">
            {info.nombre}
        </h4>
        <p>{info.categoria}</p>
    </header>
    <picture>
        <img src={info.img} className="itemImg" alt={info.nombre}/>
    </picture>
    <section>
        <p className="info">
            Precio: ${info.precio}
        </p>
    </section>
    <div><ItemCount initial={1} stock={10} onAdd={onAdd}/></div>
    <footer className="itemFooter">
        <button className="detailsItem">Ver detalle</button>
    </footer>
</div> */