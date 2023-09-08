import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { miFetch, productos } from "../../utils/mockFetch";
import ItemList from "../ItemList/ItemList";

import './estiloGreeting.css';

function ItemListContainer() {
    const [listProductos, setListProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaid } = useParams();

    useEffect(() => {

        if (categoriaid) {
            miFetch()
                .then((respuesta) => setListProductos(respuesta.filter(productos => categoriaid === productos.categoria)))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        } else {
            miFetch()
                .then((respuesta) => setListProductos(respuesta))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [categoriaid])
    return (
        <>
            <div>

                <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4 mb-5 mt-5">
                    {loading ? <span className="loading loading-spinner loading-lg mt-10"></span> : <ItemList productos={listProductos} />

                    }
                </div>

            </div>
        </>
    )

}

export default ItemListContainer