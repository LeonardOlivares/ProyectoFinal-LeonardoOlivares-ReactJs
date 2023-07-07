import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { CartContext } from '../context';



const { cartProducts, limpiarCarrito, removeItem } = useContext(CartContext);
const Cart = () => {

  const formateo = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  const total = cartProducts.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

  const handleClearCart = () => {
    limpiarCarrito();
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  

  const handleFinalizeOrder = () => {
    Swal.fire('Gracias por tu compra')
  };

  

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8 flex-grow">
        {cart.length === 0 ? (
            <div className="row">
                <h1 className="text-center mt-5">No hay productos en el carrito</h1> 
                <Link to="/" className="btn btn-cart">Volver a la tienda</Link>
            </div>
            )
            : 
        (
          <div>
            <hr />
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-8 my-4">
                
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={item.imagen} alt={item.title} className="imgProduct" />
                    </div>
                    <div className="col-sm-8">
                        <h5 className="font-weight-bold">{item.title}</h5>
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
            <div className="d-flex justify-content-center">
              <span className="total border border-secondary">Total: {formateo(total)}</span>              
            </div>
            <div className="d-flex justify-content-center">              
              <button className="btn btn-warning" onClick={handleClearCart}>Vaciar Carrito</button>
              <button className="btn btn-success" onClick={handleFinalizeOrder}>Finalizar Compra</button>
              <Link to="/" className="btn btn-warning">Volver al Catálogo</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart };