import React from "react";
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
import Appointments from "./componentes/Appointments";
import Chatbot from "./componentes/Chatbot";
import Cookies from "./componentes/Cookies";
import Authors from "./pages/Authors";
import LegalNotice from "./pages/LegalNotice";
import CookiesPolicy from "./pages/CookiesPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
               title="Cardiolog??a" 
               img="/assets/specialties/cardiologia.jpg"
               desc="La patolog??a cardiovascular constituye la primera causa de
               mortalidad en los pa??ses occidentales a pesar de los avances que
               se han producido, en los ??ltimos a??os, en el conocimiento y
               control de los factores de riesgo cardiovascular. Por este motivo,
               es fundamental un diagn??stico precoz y preciso para poder realizar
               un tratamiento adecuado." />} />
        <Route path="/traumatologia" element={<SpecsTemplate 
               title="Traumatolog??a" 
               img="/assets/specialties/traumatologia.jpg"
               desc="La Cirug??a Ortop??dica es una rama de la cirug??a que se refiere los 
                     des??rdenes del aparato locomotor. 
                     Tiene el campo de actuaci??n en corregir problemas musculares, 
                     esquel??ticos y articulares. La traumatolog??a se ocupa de lesiones 
                     traum??ticas de columna y extremidades que afectan a los huesos, ligamentos 
                     y articulaciones, m??sculos y tendones y heridas en la piel." />} />
        <Route path="/dermatologia" element={<SpecsTemplate 
               title="Dermatolog??a" 
               img="/assets/specialties/dermatologia.webp"
               desc="La Dermatolog??a es la especialidad m??dica encargada del estudio de la piel, 
                     su estructura, funci??n y enfermedades. La piel es el mayor ??rgano del cuerpo y, 
                     obviamente, el m??s visible. Aunque muchas enfermedades de este ??rgano se presentan aisladas, 
                     algunas de ellas son exteriorizaciones de dolencias internas y por lo tanto el dermat??logo tiene 
                     conocimientos en diferentes ??reas de la medicina." />} />
        <Route path="/psiquiatria" element={<SpecsTemplate 
               title="Psiquiatr??a" 
               img="/assets/specialties/psiquiatria.jpg"
               desc="La psiquiatr??a es la rama de la medicina dedicada al estudio de los trastornos mentales con el objetivo 
                     de prevenir, evaluar, diagnosticar, tratar y rehabilitar a las personas con trastornos mentales y asegurar 
                     la autonom??a y la adaptaci??n del individuo a las condiciones de su existencia" />} />
        <Route path="/gastroenterologia" element={<SpecsTemplate 
               title="Gastroenterolog??a" 
               img="/assets/specialties/gastro.jpg"
               desc="La especialidad del aparato digestivo es la rama de la medicina que se ocupa del tubo digestivo, h??gado, 
                     v??as biliares y p??ncreas." />} />
        <Route path="/ginecologia" element={<SpecsTemplate 
               title="Ginecolog??a" 
               img="/assets/specialties/Gine.jpeg"
               desc="La Ginecolog??a hace referencia a la especialidad m??dica y quir??rgica que trata las enfermedades del sistema 
                     reproductor femenino (??tero, vagina y ovarios).La Obstetricia es la parte de la medicina que se encarga de la gestaci??n, 
                     el parto y el puerperio de la mujer (periodo desde el parto hasta que la mujer regresa a su estado anterior a la gestaci??n)." />} />
        <Route path="/user/client/citas" element={<Appointments />} />
        <Route path="/chequeo" element={<SpecsTemplate 
              hide="true"
               title="Chequeo General" 
               img="https://img.saludsavia.com/wp-content/uploads/2019/06/Chequeo-Medico-Completo.jpg"
               desc="Los Chequeos Generales est??n orientados a evaluar tu estado de
               salud y prevenir algunas patolog??as asociadas a tu tipo de
               trabajo, sexo, edad, estilo de vida e historia cl??nica personal y
               familiar." />} />
        <Route path="/hemocardio" element={<SpecsTemplate 
        hide="true"
               title="Hemodin??mica / Cardiolog??a" 
               img="https://www.clinicapremium.com/wp-content/uploads/2019/03/especialidad-de-cardiologia-en-marbella.jpg"
               desc="El estudio y tratamiento de la enfermedad de las arterias
               coronarias se efect??a con una t??cnica m??nimamente invasiva.
               Adem??s, en la Unidad Hemodin??mica se realizan cateterismos
               card??acos diagn??sticos y se interviene en las arterias coronarias
               con implantaci??n de stents o de las v??lvulas del coraz??n." />} />
        <Route path="/imagen" element={<SpecsTemplate 
        hide="true"
               title="Diagn??stico por imagen" 
               img="https://www.topdoctors.mx/files/Image/large/4c6934060ae163b5675ba58855babe70.jpg"
               desc="El diagn??stico por im??genes permite a los profesionales de la
               salud observar el interior del cuerpo para buscar indicios de una
               afecci??n m??dica. Una variedad de aparatos y t??cnicas pueden crear
               im??genes de las estructuras y procesos dentro de su cuerpo. El
               tipo de imagen que use el m??dico depender?? de sus s??ntomas y de la
               parte del cuerpo que debe examinarse." />} />
        <Route path="/analisis" element={<SpecsTemplate 
        hide="true"
               title="An??lisis Cl??nicos" 
               img="https://www.lgs-analisis.es/wp-content/uploads/2019/09/2553-1-750x375.jpg"
               desc="En un primer acercamiento, podemos decir que el an??lisis cl??nico
               es un tipo de prueba exploratoria que consiste en la toma de
               muestras biol??gicas de un paciente y su examen en laboratorio para
               confirmar o descartar un diagn??stico, detectar anomal??as u obtener
               la informaci??n necesaria para aplicar un determinado tratamiento o
               cualquier otro procedimiento terap??utico." />} />
        <Route path="/patologica" element={<SpecsTemplate 
        hide="true"
               title="An??lisis Patol??gica" 
               img="https://www.ceac.es/sites/default/files/2022-07/CEACBLOG-diferencia-anatomia-patologica-laboratorio-clinico-0722.jpg.webp"
               desc="La anatom??a patol??gica es un ??rea de la medicina que estudia las
               bases morfol??gicas de la enfermedad. El origen de la anatom??a
               patol??gica es tan antiguo como la medicina, ya que se basa en la
               observaci??n directa del ??rgano enfermo." />} />
        <Route path="/endoscopia" element={<SpecsTemplate 
        hide="true"
               title="Endoscopia" 
               img="https://www.65ymas.com/uploads/s1/14/49/33/bigstock-team-of-doctors-performing-end-253620625.jpeg"
               desc="La endoscopia gastrointestinal es un procedimiento que hace el
               m??dico con un endoscopio (un tubo flexible con una c??mara) para
               ver el revestimiento de la parte superior del aparato digestivo." />} />
        <Route path="/creators" element={<Authors/>}/>
        <Route path="/legal" element={<LegalNotice/>} />
        <Route path="/cookies" element={<CookiesPolicy/>} />
        <Route path="/privacidad" element={<PrivacyPolicy/>} />
      </Routes>
      <Chatbot />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
