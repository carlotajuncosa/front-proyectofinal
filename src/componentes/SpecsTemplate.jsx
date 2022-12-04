import React, { useEffect, useState } from 'react'
import FormContact from './FormContact'
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../redux/doctors/doctors.actions';
import "../styles/SpecsTemplate.scss";

const SpecsTemplate = ({ title, img, desc }) => {
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
    <div>
        <h2 className='title'>{title}</h2>
        <div className='specs'>
            <img src={img} alt={title} />
            <p>{desc}</p>
        </div>
        {/* {doctors && doctorMap()}; */}
        <FormContact/>
    </div>
  )
}

export default SpecsTemplate;