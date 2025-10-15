import { Link } from "react-router-dom"
import { Item } from "../Item/Item"

export const ItemList = ({list}) =>{

    return <>
    {list.length ? list.map((producto) => (<Link key={producto.id} to={`/detail/${producto.id}`}><Item {...producto}/></Link>)):<p>No hay productos</p>}
    </>

}