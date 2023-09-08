import Count from "../Count/count";

const ItemDetail = ({ product }) => {
    const onAdd = (contador) => {
        console.log(contador);
    }

    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-4/6"><img src={product.urlImagen} alt="imagenpokemon" /></figure>
                <div className="card-body ml-2">
                    <h2 className="card-title">{product.nombre}</h2>
                    <p>{product.detalle}</p>
                    <p className="font-semibold text-2xl">{product.precio}</p>
                    <div>
                        <Count inicial={1} hasta={5} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail