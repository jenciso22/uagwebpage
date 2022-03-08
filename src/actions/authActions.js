import { 
    COMENZAR_INICIO_LOGIN,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_ERROR
} from "../types";
import Cookies from 'universal-cookie';
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

const cookies = new Cookies();

export function iniciarSesionAuth(datos){
    return async (dispatch) => {
        dispatch( comenzarInicioSesion() );
        try {
            //Consulta para iniciar sesion
            const respuesta = await clienteAxios.post("/api/auth",  datos);
            dispatch( comenzarInicioSesionSuccess(respuesta.data) );
            cookies.set('token', respuesta.data.token, {path: "/"});
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bienvenido',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                respuesta.data.tipoUsuario === "ALUM" ? window.location.href="./dashboard-alumno" : window.location.href="./dashboard";
            }, 1500);        
        } catch (error) {
            //console.log(error);
            dispatch( comenzarInicioSesionError() );
        }
    }
}


const comenzarInicioSesion = () => ({
    type: COMENZAR_INICIO_LOGIN,
    payload: true
});

const comenzarInicioSesionSuccess = (usuario) => ({
    type: INICIAR_SESION_EXITO,
    payload: usuario
})

const comenzarInicioSesionError = () => ({
    type: INICIAR_SESION_ERROR,
    payload: true
})
