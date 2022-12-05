import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appointmentsReducer from "./appointments/appointments.reducer";
import authReducer from "./auth/auth.reducer";
import doctorsReducer from "./doctors/doctors.reducer";
import patientsReducer from "./patients/patients.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    doctors: doctorsReducer,
    appointments: appointmentsReducer,
    patients: patientsReducer
})

const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;