const INITIAL_STATE = {
    doctors: [],
    isLoading: false,
    error: false,
  };
  
  const doctorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "gettingDoctors":
        return { ...INITIAL_STATE, isLoading: true };
      case "getDoctors":
        return {
          ...state,
          isLoading: false,
          doctors: action.payload,
          error: false,
        };
      case "errorDoctors":
        return {
          ...state,
          isLoading: false,
          doctors: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default doctorsReducer;