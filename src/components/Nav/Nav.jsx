import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import { AuthContext } from "../../context/AuthContext/AuthContext"


export const Nav = () =>{
    const { getTotalItems } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);

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
                {user==null ? 
                <li>
                    <Link to={"/carrito"}><img src="/images/carrito_icon.png" alt="Carrito" /></Link>
                    {getTotalItems() > 0 && (
                        <span className="cart-badge">{getTotalItems()}</span>
                    )}
                </li>
                : null}
                <li className="login">
                    {user ? (
                        <div className="admin-btns">
                            <Link to="/admin/alta-productos">Agregar Productos</Link>
                            <Link   to="/" onClick={(e) => {e.preventDefault();
                            const ok = confirm("¿Seguro que querés cerrar sesión?");
                            if (ok) {logout();
                            window.location.href = "/";}}}>
                        <img src="/images/logout_icon.png" title="Cerrar sesión" alt="Cerrar Sesión" /></Link>
                        </div>
                    ) : (
                        <Link to="/admin"><img src="/images/perfil_icon.png" alt="Login" />Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}