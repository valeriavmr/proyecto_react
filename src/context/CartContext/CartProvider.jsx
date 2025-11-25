import { CartContext } from "./CartContext"
import { useState } from "react"

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const existsInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const addItem = (item) => {
        
        if (existsInCart(item.id)) {
            const updatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + item.quantity};
                }else{
                    return prod;
                }
            })
            setCart(updatedCart);
            alert(`${item.name} agregados al carrito`);
        } else {
            setCart([...cart, item]);
            alert(`${item.name} agregado al carrito`);
        }
    }

    //Borra los items de un tipo
    const deleteItem = (id)=>{

        const updatedCart = cart.filter((p)=>p.id!=id);
        setCart(updatedCart);
        alert('Producto eliminado exitosamente.');
    }

    //Vacía el carrito
    const clearCart = () => {
        setCart([]);
    }

    //Numerito de items en el carrito
    const getTotalItems = () => {
        
        const totalItems = cart.reduce((acc,p)=>acc + p.quantity,0);

        return totalItems;
    }

    //Calcula el total de la compra
    const totalCompra = ()=>{

        const montoTotal = cart.reduce((acc,p)=>acc+(p.quantity*p.price),0);
        return Math.round(montoTotal*100)/100;
    }

    //Para finalizar la compra
    const finCompra = ()=>{
        const ok = confirm("¿Seguro que quiere finalizar la compra?");

        if(ok){
            alert('Compra finalizada correctamente.');
            clearCart();
        }
    }

    const values = { cart, setCart, addItem, clearCart, deleteItem,getTotalItems,totalCompra,finCompra };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}