import { 
    COMENZAR_DESCARGA_PROYECTOSG,
    DESCARGAR_PROYECTOSG_EXITO,
    DESCARGA_PROYECTOSG_ERROR 
} from "../types";
import clienteAxios from "../config/axios";

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
})

const descargaProyectosGeneralesError = () => ({
    type: DESCARGA_PROYECTOSG_ERROR,
    payload: true
})