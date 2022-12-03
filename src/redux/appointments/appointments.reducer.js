const INITIAL_STATE = {
  appointments: [],
  isLoading: false,
  error: false,
};

const appointmentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingAppointments":
      return { ...state, isLoading: true };
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

    default:
      return state;
  }
};

export default appointmentsReducer;
