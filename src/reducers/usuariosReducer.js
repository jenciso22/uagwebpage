import { 
    COMENZAR_DESCARGA_USUARIOS,
    DESCARGAR_USUARIOS_EXITO,
    DESCARGA_USUARIOS_ERROR,
    //Obtener usuarios tipo maestro
    COMENZAR_DESCARGA_MTRS,
    DESCARGAR_MRTS_EXITO,
    DESCARGAR_MTRS_ERROR,
    //Obtener usuarios tipo alumno
    COMENZAR_DESCARGA_ALUM,
    DESCARGAR_ALUM_EXITO,
    DESCARGAR_ALUM_ERROR,
    //Obtener usuario global
    USUARIO_GLOBAL_COMENZAR,
    USUARIO_GLOBAL_EXITO,
    USUARIO_GLOBAL_ERROR,
    //Editar informacion usuario
    ACTUALIZAR_USUARIO_COMENZAR,
    ACTUALIZAR_USUARIO_EXITO,
    ACTUALIZAR_USUARIO_ERROR,
    //Editar informacion escolar
    ACTUALIZAR_ESCOLAR_COMENZAR,
    ACTUALIZAR_ESCOLAR_EXITO,
    ACTUALIZAR_ESCOLAR_ERROR,
    //Editar informacion proyectos
    ACTUALIZAR_PROFESION_COMENZAR,
    ACTUALIZAR_PROFESION_EXITO,
    ACTUALIZAR_PROFESION_ERROR
} from "../types/index";

const initialState = {
    usuarios: [],
    alumnos: [],
    maestros: [],
    usuarioGlobal: [],
    mensaje: null,
    error: null,
    loading: false
};

export default function foo( state = initialState, action){
    switch (action.type) {
        case ACTUALIZAR_USUARIO_EXITO:
        case ACTUALIZAR_ESCOLAR_EXITO:
        case ACTUALIZAR_PROFESION_EXITO:
            return{
                ...state,
                mensaje: action.payload
            }
        case USUARIO_GLOBAL_EXITO:
            return{
                ...state,
                loading: false,
                error: false,
                usuarioGlobal: action.payload
            }
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
        case DESCARGAR_ALUM_EXITO:
            return{
                ...state,
                alumnos: action.payload
            }
        case COMENZAR_DESCARGA_USUARIOS:
        case COMENZAR_DESCARGA_MTRS:
        case COMENZAR_DESCARGA_ALUM:
        case USUARIO_GLOBAL_COMENZAR:
        case ACTUALIZAR_USUARIO_COMENZAR:
        case ACTUALIZAR_ESCOLAR_COMENZAR:
        case ACTUALIZAR_PROFESION_COMENZAR:
            return{
                ...state,
                loading: action.payload
            }
        case DESCARGA_USUARIOS_ERROR:
        case DESCARGAR_MTRS_ERROR:
        case DESCARGAR_ALUM_ERROR:
        case USUARIO_GLOBAL_ERROR:
        case ACTUALIZAR_PROFESION_ERROR:
        case ACTUALIZAR_ESCOLAR_ERROR:
        case ACTUALIZAR_USUARIO_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}