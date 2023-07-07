import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { CartContext } from '../context';



const Cart = () => {
  const { cartProducts, limpiarCarrito, removeProduct } = useContext(CartContext);

  const formateo = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  const total = cartProducts.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

  const handleClearCart = () => {
    limpiarCarrito();
  };

  const handleRemoveItem = (itemId) => {
    removeProduct(itemId);
  };

  

  const handleFinalizeOrder = () => {
    Swal.fire('Gracias por tu compra')
  };

  

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8 flex-grow">
        {cartProducts.length === 0 ? (
            <div className="row">
                <h1 className="text-center mt-5">No hay productos en el carrito</h1> 
                <Link to="/" className="btn btn-cart">Volver a la tienda</Link>
            </div>
            )
            : 
        (
          <div>
            <hr />
            {cartProducts.map((item) => (
              <div key={item.id} className="flex items-center space-x-8 my-4">
                
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={item.img} alt={item.nombre} className="imgProduct" />
                    </div>
                    <div className="col-sm-8">
                        <h5 className="font-weight-bold">{item.nombre}</h5>
                        <h6>Cantidad: {item.quantity}</h6>
                        <h6>Precio: {formateo(item.precio)}</h6>
                        <h6>Sub-Total: {formateo(item.precio * item.quantity)}</h6>
                    </div>
                    <div className='col-sm-2'>
                        <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Borrar Producto</button>
                    </div>                    
                </div>
                <hr />
              </div>
            ))}
            <div className="d-flex m-4 justify-content-center">
              <span className="totalCarrito border border-secondary">Total: {formateo(total)}</span>              
              <button className="btn btn-success" onClick={handleFinalizeOrder}>Finalizar Compra</button>
            </div>
            <div className="d-flex m-5 justify-content-center">              
              <button className="btn m-3 btn-danger" onClick={handleClearCart}>Vaciar Carrito</button>
              <Link to="/" className="btn m-3 btn-outline-secondary">Volver al Catálogo</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart };