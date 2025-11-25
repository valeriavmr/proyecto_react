import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import {useState, useEffect} from "react";
import { getProducts } from "../../services/products";


export const ItemListContainer = () =>{
    //estado

    const [products, setProducts] = useState([]);
    const {category} = useParams();

    //llamada a una api
    useEffect((()=>{getProducts(category).then((data)=>{setProducts(data)}).catch((err)=>{
            console.log(err);
        })
    }),[category]);

    return (
        <section className="products">
            <ItemList list={products}/>
        </section>
    )
}