import { 
    //Solicitudes maestros
    OBTENER_SOLICITUDES_MTRS,
    OBTENER_SOLICITUDES_MTRSEXITO,
    OBTENER_SOLICITUDES_MTRSERROR
} from "../types";
import clienteAxios from "../config/axios";

//Obtener proyectos generales 
export function obtenerSolicitudesMtrs(){
    return async (dispatch) => {
        dispatch( obtenerSolicitudesmaestro() );

        try {
            const respuesta = await clienteAxios.get("/api/solicitar/mtrs/3");
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