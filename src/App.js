import React from "react"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarPrincipal } from "./components/layout/navBar";

//Importar componentes
import {Contacto, Home, ItemListContainer, Nosotros, Tienda } from "./components";
import CartWidget from "./components/CartWidget";
/* import { ItemDetail } from "./components/ItemDetail"; */
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarPrincipal /> }>
           <Route path='/home' element={ <Home /> }/>
           <Route path='/nosotros' element={ <Nosotros /> } />
           <Route path='/tienda' element={ <Tienda /> } />
           <Route path='/tienda/:id' element={ <ItemDetailContainer /> } />
           <Route path='/categoria' element={ <ItemListContainer /> } />
           <Route path='/categoria/:category' element={ <ItemListContainer /> } />
           <Route path='/contacto' element={ <Contacto /> } />
           <Route path='/cart' element={ <CartWidget /> } />

           <Route path='*' element={ <h1>Página no encontrada<br/>Error 404</h1> } />
          </Route>
        </Routes>
        </BrowserRouter>
      
    </div>   
  );
}

export default App;
