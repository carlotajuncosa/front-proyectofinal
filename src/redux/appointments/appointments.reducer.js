const INITIAL_STATE = {
  appointments: [],
  isLoading: false,
  error: false,
};

const appointmentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET APPOINTMENTS
    case "gettingAppointments":
      return { ...INITIAL_STATE, isLoading: true };
    case "getAppointments":
      return {
        ...state,
        isLoading: false,
        appointments: action.payload,
        error: false,
      };
    case "errorAppointments":
      return {
        ...state,
        isLoading: false,
        appointments: [],
        error: action.payload,
      };

    // NEW APPOINTMENT
    case "new_appointments_start":
      return {
        ...state,
        isLoading: true,
      };
    case "new_appointments_ok":
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case "new_appointments_error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //EDIT APPOINTMENT
    case "edit_appointment_start":
      return {
        ...state,
        isLoading: true,
      };
    case "edit_appointments_ok":
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case "edit_appointments_error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //DELETE APPOINTMENT
    case "deleting_appointment":
      return {
        ...state,
        isLoading: true,
      };
    case "delete_appointment":
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case "delete_appointment_error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default appointmentsReducer;
