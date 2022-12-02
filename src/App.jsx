import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./componentes/Header";
import MobileHeader from "./componentes/MobileHeader";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import Centro from "./pages/Centro";
import Especialidades from "./pages/Especialidades";
import CuadroMedico from "./pages/CuadroMedico";
import AreaDiagnostica from "./pages/AreaDiagnostica";
import AreaCliente from "./pages/AreaCliente";
import PedirCita from "./pages/PedirCita";
import Contacto from "./pages/Contacto";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkSession } from "./redux/auth/auth.actions";
import { useNavigate } from "react-router-dom/dist";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => { 
    token && dispatch(checkSession(token, navigate))
  }, []);

  return (
    <div className="App">
      <Header />
      <MobileHeader />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/centro" element={<Centro />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/cuadro-medico" element={<CuadroMedico />} />
        <Route path="/area-diagnostica" element={<AreaDiagnostica />} />
        <Route path="/area-cliente" element={<AreaCliente />} />
        <Route path="/pedir-cita" element={<PedirCita />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
