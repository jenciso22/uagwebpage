import { 
    COMENZAR_INICIO_LOGIN,
    INICIAR_SESION_EXITO,
    INICIAR_SESION_ERROR,
    RENOVAR_SECCION_INICIADA,
    RENOVAR_SECCION_EXITO,
    RENOVAR_SECCION_ERROR
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
            cookies.set('idUsuario', respuesta.data.idUsuario, {path: "/"});
            setTimeout(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Bienvenido',
                    showConfirmButton: false,
                    timer: 1500
                });
            }, 300);
            respuesta.data.tipoUsuario === "ALUM" ? window.location.href = "./dashboard-alumno" : window.location.href="./dashboard";
        } catch (error) {
            //console.log(error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Los datos ingresados son incorrectos',
                showConfirmButton: false,
                timer: 1500
            });
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

//Renovar secicon del usuario si el token sirve

export function renovarSesionAuth(token){
    return async (dispatch) => {
        dispatch( renovarInicioSesion() );
        try {
            //Consulta para iniciar sesion
            const respuesta = await clienteAxios.get("/api/renew", {"headers": { "x-token": token }});
            dispatch( renovarInicioSesionSuccess(respuesta.data) );
            cookies.set('token', respuesta.data.token, {path: "/"});
        } catch (error) {
            //console.log(error);
            dispatch( renovarInicioSesionError() );
        }
    }
}



const renovarInicioSesion = () => ({
    type: RENOVAR_SECCION_INICIADA,
    payload: true
});

const renovarInicioSesionSuccess = (usuario) => ({
    type: RENOVAR_SECCION_EXITO,
    payload: usuario
})

const renovarInicioSesionError = () => ({
    type: RENOVAR_SECCION_ERROR,
    payload: true
})