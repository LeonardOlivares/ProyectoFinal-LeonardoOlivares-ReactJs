import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { CartContext } from '../context';
import { Button } from 'react-bootstrap';
import { LoadingSpinner } from '../loadingSpinner';
import { ToastContainer, toast } from 'react-toastify';



const Cart = () => {
  const Navigate = useNavigate()
  const { cartProducts, limpiarCarrito, removeProduct, totalCarrito, formateo } = useContext(CartContext);

  const handleClearCart = () => {
    limpiarCarrito();
    toast.error('Vaciaste el carrito completo', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  const handleRemoveItem = (itemId) => {
    removeProduct(itemId);
    toast.error('Producto eliminado del carrito', {
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
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8 flex-grow">
        <ToastContainer/>
        {cartProducts.length === 0 ? (
            <div className="mt-5 text-center">
            <h2>¡Tu Carrito está vacío &#128532;!</h2>
            <p>Agrega algún producto de la tienda &#128071;</p>
            <Button className="btn btn-gradient w-50" onClick={() => Navigate('/')}>Ir a la tienda</Button>
            </div>
        )
            : 
        (
          <div>
            <h1 className='d-flex display-5 pt-3 '>Carrito de compras:</h1>
            <hr />
            {cartProducts.map((item) => (
              <div key={item.id} className="flex items-center space-x-8 my-4">
                
                <div className='row'>
                    <div className='col-sm-2'>
                        {item.img ? (<img src={item.img} alt={item.nombre} className="imgProduct" />):(<LoadingSpinner />)}
                    </div>
                    <div className="col-sm-8">
                        <h5 className="font-weight-bold">{item.nombre}</h5>
                        <h6>Cantidad: {item.quantity}</h6>
                        <h6>Precio: {formateo(item.precio)}</h6>
                        <h6>Sub-Total: {formateo(item.precio * item.quantity)}</h6>
                    </div>
                    <div className='col-sm-2'>
                        <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Eliminar del carrito</button><ToastContainer/>
                    </div>                    
                </div>
                <hr />
              </div>
            ))}
            <div className="d-flex m-4 justify-content-center">
              <span className="totalCarrito border border-secondary">Total: {formateo(totalCarrito())}</span>              
              <button className="btn btn-gradient" onClick={() => Navigate('/checkout')}>Finalizar Compra</button>
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