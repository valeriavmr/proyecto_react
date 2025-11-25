import { Item } from "../Item/Item"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import { Count } from "../Count/Count"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext/AuthContext"
import './ItemDetail.css'

export const ItemDetail = ({detail, onDelete})=>{

    const {addItem} = useContext(CartContext);
    const {user} = useContext(AuthContext);

    const handleAddItem = (quantity) => {
        addItem({...detail, quantity});
    }

    return <Item {...detail}>
        {user ? <div className="admin-btn">
        <Link to={`/admin/editar/${detail.id}`}>
        <button className="edit-btn">Editar</button></Link>
        <button onClick={() => onDelete(detail.id)}>Eliminar</button>
        </div>
        : <Count btnText={"Agregar al carrito"} onConfirm={handleAddItem}/>}
    </Item>
}