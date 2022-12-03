import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import doctorsReducer from "./doctors/doctors.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    doctors: doctorsReducer,
})

const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;