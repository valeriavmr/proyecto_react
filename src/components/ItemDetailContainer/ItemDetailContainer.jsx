import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
import {ItemDetail} from "../ItemDetail/ItemDetail.jsx"
import { getProductById, deleteProduct } from "../../services/products.js";
import { useNavigate } from "react-router-dom";

export const ItemDetailContainer = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const load = async () => {
            const data = await getProductById(id);
            setProduct(data);
        };
        load();
    }, [id]);

    const onDelete = async (productId) => {
        const ok = confirm("¿Seguro que querés eliminar este producto?");

        if (!ok) return;

        try {
            await deleteProduct(productId);
            alert("Producto eliminado correctamente");
            navigate("/"); // redirige al listado
        } catch (err) {
            alert("Error al eliminar el producto");
        }
    };

    return (product ? <ItemDetail detail={product} onDelete={onDelete} /> : <p>Cargando producto...</p>);
};