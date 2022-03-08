import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer"; 
import authReducer from "./authReducer";

export default combineReducers({
    usuarios: usuariosReducer,
    auth: authReducer
});