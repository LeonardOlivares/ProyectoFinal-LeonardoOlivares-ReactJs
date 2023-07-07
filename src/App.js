import React from "react"
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarPrincipal } from "./components/layout/navBar";
import { Cart, CartProvider, Checkout, ItemListContainer, Tienda } from "./components";
import { ItemDetailContainer } from "./components/ItemDetailContainer";



function App() {
  return ( 
    <div className="App">
        <BrowserRouter>
        <CartProvider>
        <Routes>
          <Route path='' element={ <NavBarPrincipal /> }>
           <Route path='/' element={ <Tienda /> } />
           <Route path='/detalle/:id' element={ <ItemDetailContainer /> } />
           <Route path='/categoria' element={ <ItemListContainer /> } />
           <Route path='/categoria/:categoryId' element={ <ItemListContainer /> } />
           <Route path='/cart' element={ <Cart/> } />
           <Route path='/checkout' element={ <Checkout/> } />
           <Route path='*' element={ <h1>Página no encontrada<br/>Error 404</h1> } />
          </Route>
        </Routes>
        </CartProvider>
        </BrowserRouter>
        
    </div>   
  );
}

export default App;
