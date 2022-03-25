import { 
        COMENZAR_DESCARGA_USUARIOS,
        DESCARGAR_USUARIOS_EXITO,
        DESCARGA_USUARIOS_ERROR,
        //Obtener usuarios tipo maestro
        COMENZAR_DESCARGA_MTRS,
        DESCARGAR_MRTS_EXITO,
        DESCARGAR_MTRS_ERROR
} from "../types";
import clienteAxios from "../config/axios";
//import Swal from "sweetalert2";

//Obtener todos los usuarios en general
export function obtenerUsuarios(){
    return async (dispatch) => {
        dispatch( obtenerUsuariosF() );

        try {
            const respuesta = await clienteAxios.get("/api/usuarios");
            dispatch( enviarUsuarios(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( descargaProductosError() );
        }
    }
}


const obtenerUsuariosF = () => ({
    type: COMENZAR_DESCARGA_USUARIOS,
    payload: true
});

const enviarUsuarios = (usuarios) => ({
    type: DESCARGAR_USUARIOS_EXITO,
    payload: usuarios
});

const descargaProductosError = () => ({
    type: DESCARGA_USUARIOS_ERROR,
    payload: true
});


//Obtener todos los usuarios tipo maestro 
export function obtenerUsuariosMTRS(){
    return async (dispatch) => {
        dispatch( obtenerMaestros() );

        try {
            const respuesta = await clienteAxios.get("/api/usuarios/mtrs");
            dispatch( enviarmaestros(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( descargamaestrosError() );
        }
    }
}


const obtenerMaestros = () => ({
    type: COMENZAR_DESCARGA_MTRS,
    payload: true
});

const enviarmaestros = (maestros) => ({
    type: DESCARGAR_MRTS_EXITO,
    payload: maestros
});

const descargamaestrosError = () => ({
    type: DESCARGAR_MTRS_ERROR,
    payload: true
});

