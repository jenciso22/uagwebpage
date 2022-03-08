import { 
    COMENZAR_DESCARGA_USUARIOS,
    DESCARGAR_USUARIOS_EXITO,
    DESCARGA_USUARIOS_ERROR
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
        case COMENZAR_DESCARGA_USUARIOS:
            return{
                ...state,
                loading: action.payload
            }
        case DESCARGA_USUARIOS_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}