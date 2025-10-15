import { ItemList } from "../ItemList/ItemList"
import {useState, useEffect} from "react"

export const ItemListContainer = () =>{
    //estado

    const [products, setProducts] = useState([]);

    //llamada a una api
    useEffect((()=>{
        fetch('/data/productos.json').then((res)=>{
            if(!res.ok){
                throw new Error("Hubo un problema al buscar productos");
            }
            return res.json();
        }).then(
            (data)=>{
                setProducts(data);
            }
        ).catch((err)=>{
            console.log(err);
        })
    }),[]);

    return (
        <section className="products">
            <ItemList list={products}/>
        </section>
    )
}