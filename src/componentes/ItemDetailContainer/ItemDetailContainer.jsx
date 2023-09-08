import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import { miFetch, productos } from "../../utils/mockFetch";

export const ItemDetailContainer = () => {
    const [productoDetalle, setProductoDetalle] = useState({})
    const { productoid } = useParams();

    useEffect(() => {
        miFetch(Number(productoid))
            .then(resuelto => setProductoDetalle(resuelto))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <ItemDetail product={productoDetalle} />
        </div>
    )
}

export default ItemDetailContainer
