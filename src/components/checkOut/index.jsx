import React, { useContext, useState } from "react";
import { CartContext } from "../context";
import { useForm } from "react-hook-form";
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.css'


const Checkout = () => {

    const [pedidoId, setpedidoId] = useState("")
    const { cartProducts, limpiarCarrito, totalCarrito } = useContext(CartContext)
    const { register, handleSubmit } = useForm()
    const Navigate = useNavigate()
    const db = getFirestore()

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cartProducts,
            total: totalCarrito()
        }
        console.log(pedido)


        const pedidosRef = collection(db, "orders")
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setpedidoId(doc.id)
                limpiarCarrito()

            })
    }
    if (pedidoId) {
        return (
            <div className="container">
                <h1 className='display-5 pt-3 text-center '>Muchas gracias por tu compra</h1>
                <p className="text-center">Tu numero de pedido es:<br /> <b>{pedidoId}</b></p>
                <Button className="btn btn-comprarMas w-50" onClick={() => Navigate('/')}>¡Ir a la tienda a comprar más!</Button>
            </div>

        )
    }

    return (
        <>
            <div className="container">
                <h1 className='d-flex display-5 pt-3 '>Finalizando tu compra:</h1>
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Usuario</span>
                        <input type="text" class="form-control" placeholder="Ingrese su nombre" {...register("nombre")} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                        <input type="text" class="form-control" placeholder="Ingrese su email" {...register("email")} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Teléfono</span>
                        <input type="text" class="form-control" placeholder="Ingrese su teléfono" {...register("telefono")} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Dirección</span>
                        <input type="text" class="form-control" placeholder="Ingrese su dirección" {...register("direccion")} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <button className="btn btn-success text-align-right w-50" type="submit">Comprar</button>

                </form>

            </div>
        </>
    )



}
export { Checkout }