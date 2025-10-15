import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
import {ItemDetail} from "../ItemDetail/ItemDetail.jsx"

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect((
        ()=>{
            fetch('/data/productos.json').then(
                (res)=>{
            if(!res.ok){
                throw new Error("Hubo un problema al buscar productos");
            }
            return res.json();
        }
            ).then((data)=>{
                const found = data.find((p)=> p.id === id);
                if(found){
                    setDetail(found);
                }else{
                    throw new Error("No se encontró el producto");
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
    ),([id]));

    return <main>
        {Object.keys(detail).length ? (<ItemDetail detail={detail}/>):
        (<p>Cargando...</p>)
        }
    </main>
}