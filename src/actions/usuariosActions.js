import { 
            COMENZAR_DESCARGA_USUARIOS,
            DESCARGAR_USUARIOS_EXITO,
            DESCARGA_USUARIOS_ERROR 
} from "../types";
import clienteAxios from "../config/axios";
//import Swal from "sweetalert2";

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
})

const descargaProductosError = () => ({
    type: DESCARGA_USUARIOS_ERROR,
    payload: true
})
