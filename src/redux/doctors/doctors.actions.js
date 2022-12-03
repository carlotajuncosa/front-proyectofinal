import { API } from "../shared/services/api";

export const getDoctors = () => async (dispatch) => {
  dispatch({ type: "gettingDoctors" });

  try {
    const result = await API.get("doctors");
    dispatch({ type: "getDoctors", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorDoctors", payload: error.message });
  }
};