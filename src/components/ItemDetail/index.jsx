
import React, { useState, useContext } from "react";
import './itemDetail.css'
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart"
import { LoadingSpinner } from "../loadingSpinner";
import { ToastContainer, toast } from "react-toastify";


const ItemDetail = ({ item }) => {

    const [goToCart, setGoToCart] = useState(0)
    const { addProduct } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setGoToCart(quantity)

        addProduct(item, quantity)

        toast.success('Producto agregado al carrito', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


    return (
        <>
            <div className="detailer">
                <div className="ladoA">
                    {item.img ? <img src={item.img} alt={item.nombre} className="imgDetail" /> : <LoadingSpinner text={"Cargando Producto..."} />}

                </div>
                <div className="ladoB">
                    <h1 className="titleDetail">{item.nombre} </h1>
                    <p><b>Categoria:</b> {item.categoria}</p>
                    <p><b>Descripción:</b> {item.descripcion} </p>
                    <h3>Precio: ${item.precio}</h3>
                    <p>Stock disponible: <b>{item.stock}</b> unidades</p>
                    <div> {goToCart > 0 ?
                        (
                            <div>
                                <Link to='/' className='m-3 btn btn-outline-primary'>Volver al Catálogo</Link>
                                <Link to='/cart' className='m-3 btn btn-pagar'>Ir a Pagar</Link>
                            </div>)
                        :
                        <div className="contadorDetail"><ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} /></div>
                    }
                        <ToastContainer />
                    </div>

                </div>
            </div>
        </>
    )
}

export { ItemDetail }