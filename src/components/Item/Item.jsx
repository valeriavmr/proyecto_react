export const Item = ({name, price, category, descripcion, imageurl, children}) =>{

    return(
        <article className="product-item">
            <h3 className="product-title">{name}</h3>
            <img src={imageurl} alt={name} />
            <p>Precio: ${price}</p>
            <p>Categoria: {category}</p>
            <p>Descripción: {descripcion}</p>
            {children}
        </article>
    )

}