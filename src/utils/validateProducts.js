export const validateProducts = (product,fileRequiredTrue) =>{
    const errors = {};

    if(!product.name.trim()){
        errors.name = 'El nombre de producto es obbligatorio';
    }

    if(!product.price || product.price <= 0){
        errors.price = 'El precio es obligatorio';
    }

    if(!product.descripcion.trim()){
        errors.descripcion = 'La descripción es obligatoria';
    }

    if(!product.category.trim()){
        errors.category = 'La categoría es obligatoria';
    }

    if(fileRequiredTrue && !product.file){
        errors.file = 'La imagen es obligatoria';
    }

    return errors;
}