import { 
    COMENZAR_DESCARGA_PROYECTOSG,
    DESCARGAR_PROYECTOSG_EXITO,
    DESCARGA_PROYECTOSG_ERROR
} from "../types/index";

const initialState = {
    proyectosG: [],
    error: null,
    loading: false
};

export default function( state = initialState, action){
    switch (action.type) {
        case DESCARGAR_PROYECTOSG_EXITO:
            return{
                ...state,
                loading: false,
                error: false,
                usuarios: action.payload
            }
        case COMENZAR_DESCARGA_PROYECTOSG:
            return{
                ...state,
                loading: action.payload
            }
        case DESCARGA_PROYECTOSG_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}