import { createContext, useState } from 'react'

const CartContext = createContext()
const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCartProducts(cartProducts.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }))
        } else {
            setCartProducts([...cartProducts, { ...item, quantity }])
        }
    }
    const limpiarCarrito = () => {
        setCartProducts([]);
    };

    const isInCart = (id) => {
        return cartProducts.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) =>
        setCartProducts(cartProducts.filter(product => product.id !== id))

    const formateo = (precio) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
    }
    const totalCarrito = () => {
        return cartProducts.reduce((acc, item) => acc + (item.precio * item.quantity), 0)
    }

    const nItemsCarrito = () => {
        return cartProducts.reduce((total, item) => total + item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{
            nItemsCarrito,
            formateo,
            totalCarrito,
            cartProducts,
            limpiarCarrito,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }

