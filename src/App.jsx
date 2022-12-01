import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./componentes/Header";
import Home from "./pages/Home";
import Centro from "./pages/Centro";
import Especialidades from "./pages/Especialidades";
import CuadroMedico from "./pages/CuadroMedico";
import Areadiagnostica from "./pages/Areadiagnostica";
import AreaCliente from "./pages/AreaCliente";
import PedirCita from "./pages/PedirCita";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} className="allMovies" />
        <Route path="/centro" element={<Centro />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/cuadro-medico" element={<CuadroMedico />} />
        <Route path="/area-diagnostica" element={<Areadiagnostica />} />
        <Route path="/area-cliente" element={<AreaCliente />} />
        <Route path="/pedir-cita" element={<PedirCita />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
