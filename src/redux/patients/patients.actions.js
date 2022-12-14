import { API } from "../shared/services/api";
import { API2 } from "../shared/services/api";

export const getPatients = () => async (dispatch) => {
    dispatch({ type: "gettingPatients" });
  
    try {
      const result = await API.get("patients/byUser");
      dispatch({ type: "getPatients", payload: result.data });
    } catch (error) {
      dispatch({ type: "errorPatients", payload: error.message });
    }
};
  
  export const getPatientAppointments = () => async (dispatch) => {
    dispatch({ type: "gettingPatients" });
  
    try {
      const result = await API.get("users/id");
      const ids = result.data.patient;
      const patients = [];
      try {
        for (let i = 0; i < ids.length; i++) {
          const patient = await API.get("patients/" + ids[i]);
          patients.push(patient.data);
        }
      } catch (error) {
        dispatch({ type: "errorPatients", payload: error.message });
      }
  
      dispatch({ type: "getPatients", payload: patients });
    } catch (error) {
      dispatch({ type: "errorPatients", payload: error.message });
    }
  };
  
  export const newPatient = (formdata, navigate) => async (dispatch) => {
    dispatch({ type: "new_patients_start" });
    try {
      const res = await API2.post("patients/create", formdata);
      try {
        const result = await API.get("patients/byUser");
        dispatch({ type: "getPatients", payload: result.data });
      } catch (error) {
        dispatch({ type: "errorPatients", payload: error.message });
      }
    } catch (error) {
      dispatch({ type: "new_patients_error" });
    }
  };
  
  export const editPatient = (formdata, navigate, id) => async (dispatch) => {
    dispatch({ type: "edit_patients_start" });
    try {
      const result = await API2.put("patients/edit/", formdata);
      console.log(result)
      try {
        const result = await API.get("patients/byUser");
        dispatch({ type: "getPatients", payload: result.data });
      } catch (error) {
        dispatch({ type: "errorPatients", payload: error.message });
      }
      dispatch({ type: "edit_patients_ok" });
    } catch (error) {
      dispatch({ type: "edit_patients_error" });
    }
  };