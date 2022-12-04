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
import SpecsTemplate from "./componentes/SpecsTemplate";

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
        <Route path="/cardiologia" element={<SpecsTemplate 
               title="Cardiología" 
               img="/assets/specialties/cardiologia.jpg"
               desc="La patología cardiovascular constituye la primera causa de
               mortalidad en los países occidentales a pesar de los avances que
               se han producido, en los últimos años, en el conocimiento y
               control de los factores de riesgo cardiovascular. Por este motivo,
               es fundamental un diagnóstico precoz y preciso para poder realizar
               un tratamiento adecuado." />} />
        <Route path="/traumatologia" element={<SpecsTemplate 
               title="Traumatología" 
               img="/assets/specialties/traumatologia.jpg"
               desc="La Cirugía Ortopédica es una rama de la cirugía que se refiere los 
                     desórdenes del aparato locomotor. 
                     Tiene el campo de actuación en corregir problemas musculares, 
                     esqueléticos y articulares. La traumatología se ocupa de lesiones 
                     traumáticas de columna y extremidades que afectan a los huesos, ligamentos 
                     y articulaciones, músculos y tendones y heridas en la piel." />} />
        <Route path="/dermatologia" element={<SpecsTemplate 
               title="Dermatología" 
               img="/assets/specialties/dermatologia.webp"
               desc="La Dermatología es la especialidad médica encargada del estudio de la piel, 
                     su estructura, función y enfermedades. La piel es el mayor órgano del cuerpo y, 
                     obviamente, el más visible. Aunque muchas enfermedades de este órgano se presentan aisladas, 
                     algunas de ellas son exteriorizaciones de dolencias internas y por lo tanto el dermatólogo tiene 
                     conocimientos en diferentes áreas de la medicina." />} />
        <Route path="/psiquiatria" element={<SpecsTemplate 
               title="Psiquiatría" 
               img="/assets/specialties/psiquiatria.jpg"
               desc="La psiquiatría es la rama de la medicina dedicada al estudio de los trastornos mentales con el objetivo 
                     de prevenir, evaluar, diagnosticar, tratar y rehabilitar a las personas con trastornos mentales y asegurar 
                     la autonomía y la adaptación del individuo a las condiciones de su existencia" />} />
        <Route path="/gastroenterologia" element={<SpecsTemplate 
               title="Gastroenterología" 
               img="/assets/specialties/gastro.jpg"
               desc="La especialidad del aparato digestivo es la rama de la medicina que se ocupa del tubo digestivo, hígado, 
                     vías biliares y páncreas." />} />
        <Route path="/ginecologia" element={<SpecsTemplate 
               title="Ginecología" 
               img="/assets/specialties/Gine.jpeg"
               desc="La Ginecología hace referencia a la especialidad médica y quirúrgica que trata las enfermedades del sistema 
                     reproductor femenino (útero, vagina y ovarios).La Obstetricia es la parte de la medicina que se encarga de la gestación, 
                     el parto y el puerperio de la mujer (periodo desde el parto hasta que la mujer regresa a su estado anterior a la gestación)." />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
