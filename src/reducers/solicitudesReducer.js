import {
    //Solicitudes maestros
    OBTENER_SOLICITUDES_MTRS,
    OBTENER_SOLICITUDES_MTRSEXITO,
    OBTENER_SOLICITUDES_MTRSERROR
} from "../types/index";

const initialState = {
    solicitudesMtrs: [],
    solicitudesAlum: [],
    loading: false,
    error: false
};

export default function( state = initialState, action){
    switch (action.type) {
        case OBTENER_SOLICITUDES_MTRSEXITO:
            return{
                ...state,
                solicitudesMtrs: action.payload
            }
        case OBTENER_SOLICITUDES_MTRS:
            return{
                ...state,
                loading: true
            }
        case OBTENER_SOLICITUDES_MTRSERROR:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}