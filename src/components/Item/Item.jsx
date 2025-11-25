export const Item = ({name,price,category,descripcion, imageUrl, children}) =>{

    return(
        <article className="product-item">
            <h3 className="product-title">{name}</h3>
            <img src={imageUrl} alt={name} />
            <p>Precio: ${price}</p>
            <p>Categoría: {category}</p>
            <p>Descripción: {descripcion}</p>
            {children}
        </article>
    )

}