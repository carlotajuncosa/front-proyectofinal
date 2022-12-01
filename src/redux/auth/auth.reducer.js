const INITIAL_STATE = {
    user: null,
    token: null,
    error: false,
    isLoading: false,
  };

  const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "login_user_start":
        return { ...state, isLoading: true };
      case "login_user_ok":
        return {
          ...state,
          isLoading: false,
          user: action.payload.userDB,
          token: action.payload.token,
          error: false,
        };
  
      case "login_user_error":
        return {
          ...state,
          isLoading: false,
          user: null,
          token: null,
          error: action.payload,
        };
      case "register_user_start":
        return {
          ...state,
          isLoading: true,
        };
      case "register_user_ok":
        return {
          ...state,
          isLoading: false,
          error: false,
        };
      case "register_user_error":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case "logout_user_start":
        return {
          ...state,
          isLoading: true,
        };
      case "logout_user_ok":
        return {
          ...INITIAL_STATE,
        };
      case "logout_user_error":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case "checkSession_start":
        return {
          ...state,
          isLoading: true,
        };
      case "checkSession_ok":
        return {
          ...state,
          isLoading: false,
          user: action.payload.user,
          token: action.payload.token,
          error: false,
        };
      case "checkSession_error":
        return {
          ...state,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  