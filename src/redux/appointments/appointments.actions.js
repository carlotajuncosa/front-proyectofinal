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

export const newAppointment = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "register_appointments_start" });
  try {
    const result = await API.post("appointments/create", formdata);
    console.log(result);
    dispatch({ type: "register_appointments_ok" });
    navigate("/");
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
    dispatch	({ type: "edit_appointments_error" });
  }
};