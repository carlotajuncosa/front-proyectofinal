import React from 'react'
import "../styles/LegalNotice.scss";

const LegalNotice = () => {
  return (
    <div className='legalnotice'>
        <h2 className='legalnotice__title'>Aviso Legal</h2>
        <div className='legalnotice__box'>
            <p>En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de 
                la Información y de Comercio Electrónico, se informa que la entidad prestadora de Servicios es la mercantil IDCQ 
                Hospitales y Sanidad, sociedad con nacionalidad española, C/ Zurbarán 28, 28010 Madrid, CIF D-61491720, 
                Registro mercantil de Madrid, constando en el Tomo 34.117, Folio 103, Sección 8, Hoja M-609942, inscripción 5ª; 
                entidad autorizada para la prestación de Servicio sanitarios a través de la dirección www.healthalgorithm.es</p>

            <h4>CONDICIÓN DE USUARIO</h4>
            <p>Se entenderá por Usuario a la persona que acceda, navegue y utilice el Portal Web, los servicios y/o los contenidos 
                albergados en el mismo.</p>
            <p>La navegación, acceso y uso del Portal Web no requieren de registro previo, sin embargo, existen determinados servicios 
                ofertados a través de éste, cuyo acceso estará necesariamente condicionado al registro y aceptación de condiciones 
                particulares que regirán el referido servicio.</p>

            <h4>NORMAS DE USO</h4>
            <p>Uso del Servicio: el Usuario se compromete en todo caso a utilizar el Portal y sus servicios de modo diligente, correcto, 
                lícito, de conformidad con la ley, el Aviso Legal, las presentes Condiciones (y/o las que resulten aplicables en cada caso 
                concreto), reglamentos de uso e instrucciones puestos en su conocimiento, así como con la moral, las buenas costumbres 
                generalmente aceptadas y el orden público.</p>
            <p>A tal efecto, se abstendrá de llevar a cabo cualquier actividad ilícita, prohibida, o lesiva de los derechos e intereses 
                de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización 
                de los servicios, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier 
                equipo informático del Grupo Hospitalario Quirónsalud, de otros usuarios o de cualquier usuario de Internet (hardware y software).</p>

            <h4>PROPIEDAD INTELECTUAL</h4>
            <p>El diseño, imágenes, rótulos, signos distintivos, nombre comercial, marcas, logos, productos y servicios, etc. que contiene la Web se 
                encuentran protegidos por la Ley de Propiedad Industrial y son propiedad del Grupo Hospitalario Quirónsalud, sin que pueda entenderse 
                que el uso o acceso al Portal Web y/o a los servicios que en el mismo se facilitan, atribuya al Usuario derecho alguno sobre el citado 
                diseño, imágenes, rótulos, signos distintivos, nombre comercial, marcas, logos, productos y servicios.</p>
        </div>
    </div>
  )
}

export default LegalNotice