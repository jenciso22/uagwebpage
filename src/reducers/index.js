import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer"; 
import authReducer from "./authReducer";
import proyectosReducer from "./proyectosReducer";
import solicitudesReducer from "./solicitudesReducer";

export default combineReducers({
    usuarios: usuariosReducer,
    auth: authReducer,
    proyectos: proyectosReducer,
    solicitudes: solicitudesReducer
});