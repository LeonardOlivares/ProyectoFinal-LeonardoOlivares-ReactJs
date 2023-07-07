import { createContext, useState  } from 'react'

const CartContext = createContext()
const CartProvider = ({children}) => {
 
    const [cartProducts, setCartProducts] = useState([])
    
    const addProduct = (item, quantity) =>{
      if (isInCart(item.id)){
          setCartProducts(cartProducts.map(product =>{
              return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
          }))            
      } else {
          setCartProducts([...cartProducts, {...item,quantity}])
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
      const totalCarrito = () =>{
        return cartProducts.reduce((acc, item) => acc + (item.precio * item.quantity), 0)}
        /* const totalCarrito = () => {
            return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })
            .format(cartProducts.reduce((acc, item) => acc + (item.precio * item.quantity), 0))} */
    return (
        <CartContext.Provider value={{
            formateo,
            totalCarrito,
            cartProducts,
            limpiarCarrito,
            isInCart,
            removeProduct,
            addProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }

  /*  useEffect(() =>{
        if (cart.length !== 0){
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        console.log(cart)
    },[cart]) */
    
    /*const [cart, setCart] = useState([])
     
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
    } */

    /*     const [count, setCount] = useState(0);
    */
   /* {
      if (cartProducts.find((e) => e.id === product.id)) {
          const productToCart = cartProducts.map((e) =>
            e.id === product.id ? { ...e, quantity: e.quantity + 1 } : e
          );
          return setCartProducts([...productToCart]);
        }
        const productToCart = { ...product, quantity: 1 }
        setCartProducts([...cartProducts, productToCart]);
    };
    
    const onRemoveProduct = (productId) => {
        const newCart = cartProducts.filter((p) => p.id !== productId);
        setCartProducts(newCart);
    };
    
    const onDecreaseQuantity = (productId) => {
        let newArray = cartProducts.map((p) => {
            if (p.id === productId) {
                return { ...p, quantity: p.quantity - 1 };
            }
            return p;
        });
        setCartProducts(newArray);
      };
      const onIncreaseQuantity = (productId) => {
        let newArray = cartProducts.map((p) => {
            if (p.id === productId) {
                return { ...p, quantity: p.quantity + 1 };
            }
            return p;
        });
        setCartProducts(newArray);
    }; */