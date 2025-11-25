import './ProductForm.css';

export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onfileChange, 
    onSubmit,
    isEdit}) =>{
    return(
        <section>
            <form onSubmit={onSubmit}>
                <h2>{isEdit ? "Editar producto" : "Agregar producto"}</h2>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" 
                    id="name" size="50" value={product.name}
                    onChange={onChange}
                    placeholder="Ingrese el nombre del libro"/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input type="number" name="price" 
                    id="price"value={product.price} onChange={onChange}
                    />
                    {errors.price && <p>{errors.price}</p>}
                </div>
                <div>
                    <label htmlFor="category">Categoría:</label>
                    <input type="text" name="category" 
                    id="category" size="50" value={product.category}
                    onChange={onChange}
                    placeholder="Ingrese el género del libro"/>
                {errors.category && <p>{errors.category}</p>}
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea name="descripcion" id="descripcion"
                    value={product.descripcion} onChange={onChange}></textarea>
                    {errors.descripcion && <p>{errors.descripcion}</p>}
                </div>
                <div>
                    <label htmlFor="">Imagen:</label>
                    <input type="file" name="" id="" accept="image/*" onChange={(e)=>onfileChange(e.target.files?.[0]??null)}/>
                    {errors.file && <p>{errors.file}</p>}   
                </div>
                <button type="submit" disabled={loading}>{loading?"Guardando...":"Guardar"}</button>
            </form>
        </section>
    )
}