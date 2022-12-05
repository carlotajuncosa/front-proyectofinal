const INITIAL_STATE = {
    patients: [],
    isLoading: false,
    error: false,
  };
  
  const patientsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      // GET APPOINTMENTS
      case "gettingPatients":
        return { ...INITIAL_STATE, isLoading: true };
      case "getPatients":
        return {
          ...state,
          isLoading: false,
          patients: action.payload,
          error: false,
        };
      case "errorPatients":
        return {
          ...state,
          isLoading: false,
          patients: [],
          error: action.payload,
        };
      
      // NEW APPOINTMENT
      case "new_patients_start":
        return {
          ...state,
          isLoading: true,
        };
      case "new_patients_ok":
        return {
          ...state,
          isLoading: false,
          error: false,
        };
      case "new_patients_error":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
      //EDIT APPOINTMENT
      case "edit_patients_start":
        return {
        ...state,
        isLoading: true
      };
      case "edit_patients_ok":
        return {
          ...state,
          isLoading: false,
          error: false,
        };
      case "edit_patients_error":
        return{
          ...state,
          isLoading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default patientsReducer;