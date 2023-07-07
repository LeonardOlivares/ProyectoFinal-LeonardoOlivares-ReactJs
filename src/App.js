import React from "react"
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarPrincipal } from "./components/layout/navBar";
import { Cart, CartProvider, ItemListContainer, Tienda } from "./components";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqNEOllNjrRTsWkbMqSikQTWZcHAQaBXA",
  authDomain: "reactjs-olivaresleo.firebaseapp.com",
  projectId: "reactjs-olivaresleo",
  storageBucket: "reactjs-olivaresleo.appspot.com",
  messagingSenderId: "69540220399",
  appId: "1:69540220399:web:18deefd809e0b820763a1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return ( 
    <div className="App">
        <BrowserRouter>
        <CartProvider>
        <Routes>
          <Route path='' element={ <NavBarPrincipal /> }>
           <Route path='/' element={ <Tienda /> } />
           <Route path='/:id' element={ <ItemDetailContainer /> } />
           <Route path='/categoria' element={ <ItemListContainer /> } />
           <Route path='/categoria/:category' element={ <ItemListContainer /> } />
           <Route path='/cart' element={ <Cart/> } />

           <Route path='*' element={ <h1>Página no encontrada<br/>Error 404</h1> } />
          </Route>
        </Routes>
        </CartProvider>
        </BrowserRouter>
        
    </div>   
  );
}

export default App;
