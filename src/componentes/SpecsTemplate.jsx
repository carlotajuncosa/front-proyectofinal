import React, { useEffect, useState } from 'react'
import FormContact from './FormContact'
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../redux/doctors/doctors.actions';
import "../styles/SpecsTemplate.scss";
import { useNavigate} from "react-router-dom";

const SpecsTemplate = ({ title, img, desc }) => {
  let navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { doctors, isLoading } = useSelector((state) => state.doctors);
  
//     useEffect(() => {
//         dispatch(getDoctors());
        
//     }, []);

//     const [doctorsInfo, setDoctorInfo] = useState(); 
//     const filteredDoctors = [];
//     console.log(doctorsInfo);
//     const doctorMap = () =>{
//             doctors.map((doctor) => {
//                 if (doctor.specialty.toLowerCase().includes({title}.toLowerCase())) {
//                   filteredDoctors.push(doctor);
//                 }
//                 const doctorsInfo = filteredDoctors.length ? filteredDoctors : doctors;
//                 setDoctorInfo(doctorsInfo);
//                 console.log(doctors);
//               });  
//         };
  return (
  
    <div className="specsTemplate">
        <h2 className='specsTemplate__title'>{title}</h2>
        <div className='specsTemplate__container'>
            <div className='specsTemplate__container--img'>
            <img className='specsTemplate__img' src={img} alt={title} />
            </div>
            <p className='specsTemplate__p'>{desc}</p>
        </div>
        <button className="primary_button" onClick={() => navigate(-1)}>
        Volver
      </button>
        {/* {doctors && doctorMap()}; */}
        <FormContact/>
    </div>
  )
}

export default SpecsTemplate;