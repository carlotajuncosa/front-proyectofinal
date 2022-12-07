import { API } from "../shared/services/api";

export const getAppointments = () => async (dispatch) => {
  dispatch({ type: "gettingAppointments" });

  try {
    const result = await API.get("appointments");
    dispatch({ type: "getAppointments", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorAppointments", payload: error.message });
  }
};

export const getPatientAppointments = () => async (dispatch) => {
  dispatch({ type: "gettingAppointments" });

  try {
    const result = await API.get("users/id");
    const ids = result.data.appointment;
    const appointments = [];
    try {
      for (let i = 0; i < ids.length; i++) {
        const appointment = await API.get("appointments/" + ids[i]);
        appointments.push(appointment.data);
      }
    } catch (error) {
      dispatch({ type: "errorAppointments", payload: error.message });
    }

    dispatch({ type: "getAppointments", payload: appointments });
  } catch (error) {
    dispatch({ type: "errorAppointments", payload: error.message });
  }
};

export const newAppointment = (formdata, navigate, changeOption) => async (dispatch) => {
  dispatch({ type: "register_appointments_start" });
  try {
    const result = await API.post("appointments/create", formdata);
    console.log(result);
    dispatch({ type: "register_appointments_ok" });
    navigate("/area-cliente");
    changeOption("Citas");
  } catch (error) {
    dispatch({ type: "register_appointments_error" });
  }
};

export const editAppointment = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "edit_appointments_start" });
  try {
    const result = await API.put("edit/{_id}", formdata);
    console.log(result);
    dispatch({ type: "edit_appointments_ok" });
  } catch (error) {
    dispatch({ type: "edit_appointments_error" });
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  dispatch({type: "deleting_appointment"});
    try {
      const deleted = await API.delete("appointments/delete/" + id);
      const result = await API.get("users/id");
      const ids = result.data.appointment;
      const appointments = [];
      try {
        for (let i = 0; i < ids.length; i++) {
          const appointment = await API.get("appointments/" + ids[i]);
          appointments.push(appointment.data);
        } 
      } catch (error) {
        dispatch({ type: "errorAppointments", payload: error.message });
      } 
      dispatch({ type: "getAppointments", payload: appointments });
  } catch (error) {
    dispatch({ type: "delete_appointment_error" });
  }
};
