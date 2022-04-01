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
} from "../types";
import clienteAxios from "../config/axios";

//Obtener proyectos generales 
export function obtenerProyectosGenerales(){
    return async (dispatch) => {
        dispatch( obtenerProyectosG() );

        try {
            const respuesta = await clienteAxios.get("/api/proyectos");
            dispatch( enviarProyectosGenerales(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( descargaProyectosGeneralesError() );
        }
    }
}

const obtenerProyectosG = () => ({
    type: COMENZAR_DESCARGA_PROYECTOSG,
    payload: true
});

const enviarProyectosGenerales = (proyectosG) => ({
    type: DESCARGAR_PROYECTOSG_EXITO,
    payload: proyectosG
});

const descargaProyectosGeneralesError = () => ({
    type: DESCARGA_PROYECTOSG_ERROR,
    payload: true
});

//Obtener proyectos Maestros
export function obtenerProyectosMTRS(id){
    return async (dispatch) => {
        dispatch( obtenerProyectosMaestros() );
        try {
            const respuesta = await clienteAxios.get(`/api/proyectos/mtrs/${id}`);
            dispatch( obtenerProyectosMTRSExito(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( obtenerProyectosMTRSERROR() );
        }
    }
}

const obtenerProyectosMaestros = () => ({
    type: OBTENER_PROYECTOS_MTRS,
    payload: true
});

const obtenerProyectosMTRSExito = (proyectosMtrs) => ({
    type: OBTENER_PROYECTOS_MTRSEXITO,
    payload: proyectosMtrs
});

const obtenerProyectosMTRSERROR = () => ({
    type: OBTENER_PROYECTOS_MTRSERROR,
    payload: true
});

//Agregar proyecto mtrs
export function agregarProyectoMTRS(datos){
    return async (dispatch) => {
        dispatch( agregarProyectoMaestros() );
        try {
            const respuesta = await clienteAxios.post(`/api/proyectos`, datos);
            dispatch( agregarProyectoMTRSExito(respuesta.data) );
        } catch (error) {
            dispatch( agregarProyectoMTRSERROR() );
        }
    }
}

const agregarProyectoMaestros = () => ({
    type: AGREGAR_PROYECTOS_MTRS,
    payload: true
});

const agregarProyectoMTRSExito = ( mnsAgregado) => ({
    type: AGREGAR_PROYECTOS_MTRSEXITO,
    payload: mnsAgregado
});

const agregarProyectoMTRSERROR = () => ({
    type: AGREGAR_PROYECTOS_MTRSERROR,
    payload: true
});

//Eliminar Proyecto mtrs
export function eliminarProyectoMTRS(id, idUsuario){
    return async (dispatch) => {
        dispatch( eliminarProyectoMaestros() );
        try {
            const respuesta = await clienteAxios.delete(`/api/proyectos/${id}/${idUsuario}`);
            dispatch( eliminarProyectoMTRSExito(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( eliminarProyectoMTRSERROR() );
        }
    }
}

const eliminarProyectoMaestros = () => ({
    type: ELIMINAR_PROYECTOS_MTRS,
    payload: true
});

const eliminarProyectoMTRSExito = (mnsEliminado) => ({
    type: ELIMINAR_PROYECTOS_MTRSEXITO,
    payload: mnsEliminado
});

const eliminarProyectoMTRSERROR = () => ({
    type: ELIMINAR_PROYECTOS_MTRSERROR,
    payload: true
});

//actualizar proyecto mtrs
export function actualizarProyectoMTRS(datos){   
    return async (dispatch) => {
            dispatch( actualizarProyectoMaestros() );
            try {

                const respuesta = await clienteAxios.put(`/api/proyectos/${datos.idProyecto}`, datos)
                dispatch( actualizarProyectoMTRSExito(respuesta.data) );
            } catch (error) {
                dispatch( actualizarProyectoMTRSERROR() );
            }
        }
}
    
const actualizarProyectoMaestros = () => ({
    type: ACTUALIZAR_PROYECTOS_MTRS,
    payload: true
});
    
const actualizarProyectoMTRSExito = (mnsExito) => ({
    type: ACTUALIZAR_PROYECTOS_MTRSEXITO,
    payload: mnsExito
});
    
const actualizarProyectoMTRSERROR = () => ({
    type: ACTUALIZAR_PROYECTOS_MTRSERROR,
    payload: true
});
    