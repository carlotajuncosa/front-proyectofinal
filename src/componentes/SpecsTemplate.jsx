import React, { useEffect, useState } from "react";
import FormContact from "./FormContact";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../redux/doctors/doctors.actions";
import "../styles/SpecsTemplate.scss";
import { useNavigate } from "react-router-dom";
import DoctorsCard from "./DoctorsCard";

const SpecsTemplate = ({ title, img, desc, hide }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { doctors, isLoading } = useSelector((state) => state.doctors);

  const [doctorsInfo, setDoctorInfo] = useState();
  const filteredDoctors = [];

  useEffect(() => {
    dispatch(getDoctors());
  }, [title]);

  useEffect(() => {
    doctors.map((doctor) => {
      
      if (doctor?.specialty?.toLowerCase().includes(title.substr(0, (title.length - 3)).toLowerCase())) {
        filteredDoctors.push(doctor);
      }
      const doctorsInfo = filteredDoctors.length ? filteredDoctors : doctors;
      setDoctorInfo(doctorsInfo);
    });
  }, [doctors])

  return (
    <div className="specsTemplate">
      <h2 className="specsTemplate__title">{title}</h2>
      <div className="specsTemplate__container">
        <div className="specsTemplate__container--img">
          <img className="specsTemplate__img" src={img} alt={title} />
        </div>
        <p className="specsTemplate__p">{desc}</p>
      </div>
      <button className="primary_button" onClick={() => navigate(-1)}>
        Volver
      </button>
      <div className="doctorCont">
      {!hide && !isLoading && doctorsInfo &&
        doctorsInfo.map((doctor) => {
          return <DoctorsCard key={doctor._id} doctor={doctor} />;
        })}
    </div>
      <FormContact />
    </div>
  );
};

export default SpecsTemplate;
