import { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../../../services/products";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProducts } from "../../../utils/validateProducts";
import { useParams } from "react-router-dom";

export const EditProductContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            const data = await getProductById(id);
            setProduct(data);
        };
        loadProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validation = validateProducts({ ...product, file }, false); 
        // false = imagen no obligatoria al editar

        if (Object.keys(validation).length > 0) {
            setErrors(validation);
            return;
        }

        try {
            setLoading(true);

            let imageUrl = product.imageUrl;

            if (file) {
                imageUrl = await uploadToImgbb(file);
            }

            await updateProduct(id, { ...product, imageUrl });
            alert("Producto editado!");
        } finally {
            setLoading(false);
        }
    };

    if (!product) return <p>Cargando...</p>;

    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onfileChange={setFile}
            onSubmit={handleSubmit}
            isEdit={true}
        />
    );
};