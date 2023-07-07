import React, { useContext } from "react";
import { CartContext } from "../context";
import { useForm } from "react-hook-form";


const Checkout = () => {

    const { cartProducts, limpiarCarrito, totalCarrito } = useContext(CartContext)
    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cartProducts,
            total: totalCarrito()
        }
        console.log(pedido)
    }




    return (
        <>
        <div className="container">
        <h1 className='d-flex display-5 pt-3 '>Finalizando tu compra:</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Usuario</span>
                    <input type="text" class="form-control" placeholder="Ingrese su nombre" {...register("nombre")} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" class="form-control" placeholder="Ingrese su email" {...register("email")} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Teléfono</span>
                    <input type="text" class="form-control" placeholder="Ingrese su teléfono" {...register("telefono")} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Dirección</span>
                    <input type="text" class="form-control" placeholder="Ingrese su dirección" {...register("direccion")} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            <button className="btn btn-outline-success text-align-right" type="submit">Comprar</button>

            </form>

        </div>
        </>
    )



}
export { Checkout }