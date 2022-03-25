import { 
    COMENZAR_DESCARGA_USUARIOS,
    DESCARGAR_USUARIOS_EXITO,
    DESCARGA_USUARIOS_ERROR,
    //Obtener usuarios tipo maestro
    COMENZAR_DESCARGA_MTRS,
    DESCARGAR_MRTS_EXITO,
    DESCARGAR_MTRS_ERROR
} from "../types/index";

const initialState = {
    usuarios: [],
    alumnos: [],
    maestros: [],
    error: null,
    loading: false
};

export default function( state = initialState, action){
    switch (action.type) {
        case DESCARGAR_USUARIOS_EXITO:
            return{
                ...state,
                loading: false,
                error: false,
                usuarios: action.payload
            }
        case DESCARGAR_MRTS_EXITO:
            return{
                ...state,
                maestros: action.payload
            }
        case COMENZAR_DESCARGA_USUARIOS:
        case COMENZAR_DESCARGA_MTRS:
            return{
                ...state,
                loading: action.payload
            }
        case DESCARGA_USUARIOS_ERROR:
        case DESCARGAR_MTRS_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}