import { CartContext } from "./CartContext"
import { useState } from "react"

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const existsInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const addItem = (item) => {
        if (existsInCart(item.id)) {
            alert(`${item.name} ya está en el carrito`);
            return;
        } else {
            setCart([...cart, item]);
            alert(`${item.name} agregado al carrito`);
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        if (!cart.length) return 0;
        return cart.length;
    }

    const values = { cart, setCart, addItem, clearCart, getTotalItems };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}