import { 
    COMENZAR_INICIO_LOGIN,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_ERROR,
    RENOVAR_SECCION_INICIADA,
    RENOVAR_SECCION_EXITO,
    RENOVAR_SECCION_ERROR
} from "../types/index";

const initialState = {
    login: false,
    loading: false,
    error: false,
    usuario: null
};

export default function foo( state = initialState, action){
    switch (action.type) {
        case INICIAR_SESION_EXITO:
        case RENOVAR_SECCION_EXITO:
            return{
                ...state,
                loading: false,
                error: false,
                usuario: action.payload
            }
        case COMENZAR_INICIO_LOGIN:
        case RENOVAR_SECCION_INICIADA:
            return{
                ...state,
                loading: action.payload
            }
        case INICIAR_SESION_ERROR:
        case RENOVAR_SECCION_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}