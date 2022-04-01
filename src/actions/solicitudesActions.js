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
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

//Obtener proyectos generales 
export function obtenerSolicitudesAlum(id){
    return async (dispatch) => {
        dispatch( obtenerSolicitudesalumno() );

        try {
            const respuesta = await clienteAxios.get(`/api/solicitar/alum/${id}`);
            dispatch( obtenerSolicitudAlumExtito(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( obtenerSolicitudAlumError() );
        }
    }
}

const obtenerSolicitudesalumno = () => ({
    type: OBTENER_SOLICITUD_ALUM,
    payload: true
});

const obtenerSolicitudAlumExtito = (solicitudes) => ({
    type: OBTENER_SOLICITUD_ALUMEXITO,
    payload: solicitudes
});

const obtenerSolicitudAlumError = () => ({
    type: OBTENER_SOLICITUD_ALUMERROR,
    payload: true
});

//Obtener proyectos generales 
export function obtenerSolicitudesMtrs(id){
    return async (dispatch) => {
        dispatch( obtenerSolicitudesmaestro() );

        try {
            const respuesta = await clienteAxios.get(`/api/solicitar/mtrs/${id}`);
            dispatch( obtenerSolicitudMtrsExtito(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( obtenerSolicitudMtrsError() );
        }
    }
}

const obtenerSolicitudesmaestro = () => ({
    type: OBTENER_SOLICITUDES_MTRS,
    payload: true
});

const obtenerSolicitudMtrsExtito = (solicitudes) => ({
    type: OBTENER_SOLICITUDES_MTRSEXITO,
    payload: solicitudes
});

const obtenerSolicitudMtrsError = () => ({
    type: OBTENER_SOLICITUDES_MTRSERROR,
    payload: true
});

//Actualizar solicitud del usario para maestro
export function actualizarSolicitudesMtrs(datos){
    return async (dispatch) => {
        dispatch( actualizarSolicitudesmaestro() );

        try {
            const respuesta = await clienteAxios.put("/api/solicitar", datos);
            dispatch( actualizarSolicitudMtrsExtito(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( actualizarSolicitudMtrsError() );
        }
    }
}

const actualizarSolicitudesmaestro = () => ({
    type: ACEPTAR_SOLICITUD_ALUM,
    payload: true
});

const actualizarSolicitudMtrsExtito = (mensaje) => ({
    type: ACEPTAR_SOLICITUD_ALUMEXITO,
    payload: mensaje
});

const actualizarSolicitudMtrsError = () => ({
    type: ACEPTAR_SOLICITUD_ALUMERROR,
    payload: true
});
//Rechazar solicitud y eliminarla
export function eliminarSolicitudesMtrs(datos){
    return async (dispatch) => {
        dispatch( eliminarSolicitudesmaestro() );
        try {
            const respuesta = await clienteAxios.delete(`/api/solicitar/${datos.idUsuario}/${datos.idProyecto}/${datos.idSolicitar}`);
            dispatch( eliminarSolicitudMtrsExtito(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( eliminarSolicitudMtrsError() );
        }
    }
}

const eliminarSolicitudesmaestro = () => ({
    type: ELIMINAR_SOLICITUD_ALUM,
    payload: true
});

const eliminarSolicitudMtrsExtito = ( mensage ) => ({
    type: ELIMINAR_SOLICITUD_ALUMEXITO,
    payload: mensage
});

const eliminarSolicitudMtrsError = () => ({
    type: ELIMINAR_SOLICITUD_ALUMERROR,
    payload: true
});

//Solicitar un proyecto desde un alumno
export function solicitarSolicitudesAlum(datos){
    return async (dispatch) => {
        dispatch( solicitarSolicitudesAlumno() );
        try {
            const respuesta = await clienteAxios.post(`/api/solicitar`, datos);
            console.log(respuesta.data);
            dispatch( solicitarSolicitudMtrsExtito(respuesta.data) );
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu solicitud se envio correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            //console.log(error);
            dispatch( solicitarSolicitudMtrsError() );
        }
    }
}

const solicitarSolicitudesAlumno = () => ({
    type: SOLICITAR_SOLICITUD_ALUM,
    payload: true
});

const solicitarSolicitudMtrsExtito = ( mensage ) => ({
    type: SOLICITAR_SOLICITUD_ALUMEXITO,
    payload: mensage
});

const solicitarSolicitudMtrsError = () => ({
    type: SOLICITAR_SOLICITUD_ALUMERROR,
    payload: true
});