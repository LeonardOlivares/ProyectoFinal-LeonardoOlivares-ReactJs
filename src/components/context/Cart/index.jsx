import { createContext, useState  } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    
   /*  useEffect(() =>{
        if (cart.length !== 0){
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        console.log(cart)
    },[cart]) */

    const addItem = (item, quatity) =>{
        if(!isInCart(item.id)){
            setCart((prev) => [...prev,{...item, quatity}])

        } else{
            alert ("producto ya se agregó")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(item => item.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId)
    }

    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }