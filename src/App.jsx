
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';
import Home from "./componentes/ComponentePortadas/Home";

import './App.css';

function App() {

  return (
    <>

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaid" element={< ItemListContainer />} />

          <Route path="/detalle/:productoid" element={< ItemDetailContainer />} />
          <Route path="/cart" element={< CartContainer />} />
        </Routes>

        < Footer />

      </Router>

    </>
  )
}

//Creé el componente ItemListContainer que devuelve un mensaje con su estilo.

export default App
