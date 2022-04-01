import {
    //Solicitudes maestros
    OBTENER_SOLICITUDES_MTRS,
    OBTENER_SOLICITUDES_MTRSEXITO,
    OBTENER_SOLICITUDES_MTRSERROR,
    //Actualizar solicitud del usario para maestro
    ACEPTAR_SOLICITUD_ALUM,
    ACEPTAR_SOLICITUD_ALUMEXITO,
    ACEPTAR_SOLICITUD_ALUMERROR,
    //Rechazar solicitud y eliminarla
    ELIMINAR_SOLICITUD_ALUM,
    ELIMINAR_SOLICITUD_ALUMEXITO,
    ELIMINAR_SOLICITUD_ALUMERROR,
    //Solicitar un proyecto
    SOLICITAR_SOLICITUD_ALUM,
    SOLICITAR_SOLICITUD_ALUMEXITO,
    SOLICITAR_SOLICITUD_ALUMERROR,
    //Obtener solicitudes alumno
    OBTENER_SOLICITUD_ALUM,
    OBTENER_SOLICITUD_ALUMEXITO,
    OBTENER_SOLICITUD_ALUMERROR
} from "../types/index";

const initialState = {
    solicitudesMtrs: [],
    solicitudesAlum: [],
    mensaje: null,
    mensaje2: null,
    mensaje3Solicitar: null,
    loading: false,
    error: false
};

export default function foo( state = initialState, action){
    switch (action.type) {
        case OBTENER_SOLICITUD_ALUMEXITO:
            return{
                ...state,
                solicitudesAlum: action.payload
            }
        case OBTENER_SOLICITUDES_MTRSEXITO:
            return{
                ...state,
                solicitudesMtrs: action.payload
            }
        case ACEPTAR_SOLICITUD_ALUMEXITO:
            return{
                ...state,
                mensaje: action.payload
            }
        case ELIMINAR_SOLICITUD_ALUMEXITO:
            return{
                ...state,
                mensaje: action.payload
            }
        case SOLICITAR_SOLICITUD_ALUMEXITO:
            return{
                ...state,
                mensaje3Solicitar: action.payload
            }
        case OBTENER_SOLICITUDES_MTRS:
        case ACEPTAR_SOLICITUD_ALUM:
        case ELIMINAR_SOLICITUD_ALUM:
        case SOLICITAR_SOLICITUD_ALUM:
        case OBTENER_SOLICITUD_ALUM:
            return{
                ...state,
                loading: true
            }
        case OBTENER_SOLICITUDES_MTRSERROR:
        case ELIMINAR_SOLICITUD_ALUMERROR:
        case ACEPTAR_SOLICITUD_ALUMERROR:
        case SOLICITAR_SOLICITUD_ALUMERROR:
        case OBTENER_SOLICITUD_ALUMERROR:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}