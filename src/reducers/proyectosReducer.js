import {
    //Obtener todos los usuarios 
    COMENZAR_DESCARGA_PROYECTOSG,
    DESCARGAR_PROYECTOSG_EXITO,
    DESCARGA_PROYECTOSG_ERROR,
    //Obtener proyectos del maestro conectado
    OBTENER_PROYECTOS_MTRS,
    OBTENER_PROYECTOS_MTRSEXITO,
    OBTENER_PROYECTOS_MTRSERROR,
    //Eliminar un proyecto
    ELIMINAR_PROYECTOS_MTRS,
    ELIMINAR_PROYECTOS_MTRSEXITO,
    ELIMINAR_PROYECTOS_MTRSERROR,
    //Actualizar proyecto
    ACTUALIZAR_PROYECTOS_MTRS,
    ACTUALIZAR_PROYECTOS_MTRSEXITO,
    ACTUALIZAR_PROYECTOS_MTRSERROR,
    //Agregar un proyecto
    AGREGAR_PROYECTOS_MTRS,
    AGREGAR_PROYECTOS_MTRSEXITO,
    AGREGAR_PROYECTOS_MTRSERROR
} from "../types/index";

const initialState = {
    proyectosG: [],
    proyectosMtrs: [],
    proyectoNew: null,
    mensaje: null,
    error: null,
    loading: false
};

export default function( state = initialState, action){
    switch (action.type) {
        case ELIMINAR_PROYECTOS_MTRSEXITO:
        case ACTUALIZAR_PROYECTOS_MTRSEXITO:
        case AGREGAR_PROYECTOS_MTRSEXITO:
            return{
                ...state,
                mensaje: action.payload
            }
        case DESCARGAR_PROYECTOSG_EXITO:
            return{
                ...state,
                proyectosG: action.payload
            }
        case OBTENER_PROYECTOS_MTRSEXITO:
            return{
                ...state,
                proyectosMtrs: action.payload
            }
        case COMENZAR_DESCARGA_PROYECTOSG:
        case OBTENER_PROYECTOS_MTRS:
        case ELIMINAR_PROYECTOS_MTRS:
        case ACTUALIZAR_PROYECTOS_MTRS:
        case AGREGAR_PROYECTOS_MTRS:
            return{
                ...state,
                loading: action.payload
            }
        case DESCARGA_PROYECTOSG_ERROR:
        case OBTENER_PROYECTOS_MTRSERROR:
        case ELIMINAR_PROYECTOS_MTRSERROR:
        case ACTUALIZAR_PROYECTOS_MTRSERROR:
        case AGREGAR_PROYECTOS_MTRSERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}