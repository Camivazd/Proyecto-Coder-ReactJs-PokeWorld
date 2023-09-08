
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import PortadaUno from "./PortadaUno";
import PortadaDos from "./PortadaDos";

function Home() {
    return (
        <>
            <PortadaUno />
            <ItemListContainer />
            <PortadaDos />
        </>
    );
}

export default Home