const BASE_URL = "https://690964fc2d902d0651b3950d.mockapi.io/products";

export const createProduct = async (product) =>{

    //Hago una llamada de tipo POST a la API
    const res = await fetch(BASE_URL,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(product)
    });

    //Lanzo un error si no se pudo crear el producto
    if(!res.ok){
        throw new Error("No se pudo crear el producto");
    }

    //Recupero el resultado
    const result = await res.json();

    return result;
}

export const getProducts = async (category) =>{

    let url = BASE_URL;

    if(category){
        url = `${BASE_URL}?category=${category}`;
    }

    //Hago una llamada a la api
    const res = await fetch(url);

    //Lanzo un error si no se pudo crear el producto
    if(!res.ok){
        throw new Error("No se pudo recuperar los productos");
    }

    //Recupero el resultado
    const result = await res.json();

    return result;
}

export const getProductById = async (id) =>{
    const url = `${BASE_URL}/${id}`;
    //Hago una llamada a la api
    const res = await fetch(url);
    //Lanzo un error si no se pudo crear el producto
    if(!res.ok){
        throw new Error("No se pudo recuperar el producto");
    }
    //Recupero el resultado
    const result = await res.json();
    return result;
}

export const updateProduct = async (id, product) =>{

    //Hago una llamada de tipo PUT a la API
    const res = await fetch(`${BASE_URL}/${id}`,{
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(product)
    });
    //Lanzo un error si no se pudo crear el producto
    if(!res.ok){
        throw new Error("No se pudo actualizar el producto");
    }
    //Recupero el resultado
    const result = await res.json();
    return result;
}

export const deleteProduct = async (id) =>{
    //Hago una llamada de tipo DELETE a la API
    const res = await fetch(`${BASE_URL}/${id}`,{
        method:"DELETE"
    });
    //Lanzo un error si no se pudo crear el producto
    if(!res.ok){
        throw new Error("No se pudo eliminar el producto");
    }
    //Recupero el resultado
    const result = await res.json();
    return result;
}
