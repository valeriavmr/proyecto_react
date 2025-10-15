import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"

export const Nav = () =>{
    const { getTotalItems } = useContext(CartContext);
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/fantasia"}>fantasía</Link>
                </li>
                <li>
                    <Link to={"/category/thriller"}>Thriller</Link>
                </li>
                <li>
                    <Link to={"/category/realismo_magico"}>Realismo mágico</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito</Link>
                    {getTotalItems() > 0 && (
                        <span className="cart-badge">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    )
}