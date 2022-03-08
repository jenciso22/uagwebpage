import { 
    COMENZAR_INICIO_LOGIN,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_ERROR
} from "../types/index";

const initialState = {
    login: false,
    loading: false,
    error: false,
    usuario: null
};

export default function( state = initialState, action){
    switch (action.type) {
        case INICIAR_SESION_EXITO:
            return{
                ...state,
                loading: false,
                error: false,
                usuario: action.payload
            }
        case COMENZAR_INICIO_LOGIN:
            return{
                ...state,
                loading: action.payload
            }
        case INICIAR_SESION_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}