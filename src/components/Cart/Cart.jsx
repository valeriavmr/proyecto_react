import './Cart.css'
import {useCartContext} from '../../context/CartContext/useCartContext';
import {Item} from '../Item/Item';
import { Link } from 'react-router-dom';

export const Cart = () =>{

    const {cart,clearCart,deleteItem, totalCompra,finCompra} = useCartContext();

    return(
    <section>
        <h2>Carrito de compras</h2>

        <div className='carrito-libros'>
            {cart.length ? cart.map((prod)=>{
        
        return(<Item key={prod.id} {...prod}>
            <span>Cantidad: {prod.quantity}</span>
            <button onClick={()=> deleteItem(prod.id)}>Eliminar del carrito</button>
        </Item>)
        })
        :<p>Tu carrito está vacío</p>}
        </div>
        {cart.length ? <div className='cart-summary'>
        <div><p>Total a pagar: ${totalCompra()}</p>
        </div>
        <button onClick={()=>finCompra()}>Finalizar compra</button>
        <button onClick={()=>clearCart()}>Vaciar Carrito</button>
        </div>:
        <Link to="/">Volver al inicio</Link>}

        </section>)

}