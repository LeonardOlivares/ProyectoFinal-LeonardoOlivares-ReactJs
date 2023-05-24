import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarPrincipal } from "./components/layout/navBar/navbar";

//Importar componentes
import {Contacto, Home, Nosotros, Tienda } from "./components";
import CartWidget from "./components/CartWidget/cartWidget";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarPrincipal /> }>
           <Route path='home' element={ <Home /> }/>
           <Route path='nosotros' element={ <Nosotros /> } />
           <Route path='tienda' element={ <Tienda /> } />
           <Route path='contacto' element={ <Contacto /> } />
           <Route path='cart' element={ <CartWidget /> } />

           <Route path='*' element={ <h1>404</h1> } />
           </Route>
        </Routes>
        </BrowserRouter>
      
    </div>   
  );
}

export default App;
