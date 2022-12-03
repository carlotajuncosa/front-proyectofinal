import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DoctorsCard from '../componentes/DoctorsCard';
import FormContact from '../componentes/FormContact';
import Map from '../componentes/Map';
import { getDoctors } from '../redux/doctors/doctors.actions';
import "../styles/CuadroMedico.scss";

const CuadroMedico = () => {

  const dispatch = useDispatch();
  const { doctors, isLoading } = useSelector((state) => state.doctors);
  const [searchInputDoctors, setSearchInputDoctors] = useState("");

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  const filteredDoctors = [];

  
  doctors.map((doctor) => {
    if (doctor.name.toLowerCase().includes(searchInputDoctors.toLowerCase()) ||
      doctor.surname.toLowerCase().includes(searchInputDoctors.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchInputDoctors.toLowerCase())
      ) {
      filteredDoctors.push(doctor);
    }
  });
  
  const doctorsInfo = filteredDoctors.length ? filteredDoctors : doctors;

  return (
    <div className='medicalChart'>
      <h2 className='title'>Cuadro Medico</h2>
      <>
        {!isLoading && (
          <div className='doctor'>
            <div className='doctor__search'>
              <input 
              type="search" 
              className="input-search" 
              placeholder="BUSCAR DOCTOR O ESPECIALIDAD" 
              value={searchInputDoctors}
              onChange={(e) => setSearchInputDoctors(e.target.value)}
              />
            </div>
            <div className='doctor__cards'>
              {doctorsInfo.map((doctor) => {
                return <DoctorsCard key={doctor._id} doctor={doctor} />;
              })}
            </div>
          </div>
        )}
      </>
        <FormContact />
        <Map />
    </div>
  )
}

export default CuadroMedico