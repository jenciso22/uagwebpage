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
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";


//Editar informacion usuario
export function editarUsuarioPerfil(id, datos){
    return async (dispatch) => {
        dispatch( editarUsuarioComenzar() );

        try {
            const respuesta = await clienteAxios.put(`/api/usuarios/${id}`, datos);
            dispatch( editarUsuarioExito(respuesta.data) );
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Usuario actualizado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            //console.log(error);
            dispatch( editarUsuarioError() );
        }
    }
}


const editarUsuarioComenzar = () => ({
    type: ACTUALIZAR_USUARIO_COMENZAR,
    payload: true
});

const editarUsuarioExito = (usuarios) => ({
    type: ACTUALIZAR_USUARIO_EXITO,
    payload: usuarios
});

const editarUsuarioError = () => ({
    type: ACTUALIZAR_USUARIO_ERROR,
    payload: true
});

//Editar informacion escolar
export function editarEscolarPerfil(id, datos){
    return async (dispatch) => {
        dispatch( editarEscolarComenzar() );

        try {
            const respuesta = await clienteAxios.put(`/api/usuarios/escolar/${id}`, datos);
            dispatch( editarEscolarExito(respuesta.data) );
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Informacion actualizada correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            //console.log(error);
            dispatch( editarEscolarError() );
        }
    }
}


const editarEscolarComenzar = () => ({
    type: ACTUALIZAR_ESCOLAR_COMENZAR,
    payload: true
});

const editarEscolarExito = (usuarios) => ({
    type: ACTUALIZAR_ESCOLAR_EXITO,
    payload: usuarios
});

const editarEscolarError = () => ({
    type: ACTUALIZAR_ESCOLAR_ERROR,
    payload: true
});

//Editar informacion proyectos
export function editarProfesionPerfil(id, datos){
    return async (dispatch) => {
        dispatch( editarProfesionComenzar() );

        try {
            const respuesta = await clienteAxios.put(`/api/usuarios/profesion/${id}`, datos);
            dispatch( editarProfesionExito(respuesta.data) );
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Informacion actualizada correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            //console.log(error);
            dispatch( editarProfesionError() );
        }
    }
}


const editarProfesionComenzar = () => ({
    type: ACTUALIZAR_PROFESION_COMENZAR,
    payload: true
});

const editarProfesionExito = (usuarios) => ({
    type: ACTUALIZAR_PROFESION_EXITO,
    payload: usuarios
});

const editarProfesionError = () => ({
    type: ACTUALIZAR_PROFESION_ERROR,
    payload: true
});

//Obtener todos los usuarios en general
export function obtenerUsuariosGlobal(id){
    return async (dispatch) => {
        dispatch( obtenerUsuariosG() );

        try {
            const respuesta = await clienteAxios.get(`/api/usuarios/${id}`);
            dispatch( enviarUsuariosGlobalExito(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( descargaUsuarioGlobalError() );
        }
    }
}


const obtenerUsuariosG = () => ({
    type: USUARIO_GLOBAL_COMENZAR,
    payload: true
});

const enviarUsuariosGlobalExito = (usuarios) => ({
    type: USUARIO_GLOBAL_EXITO,
    payload: usuarios
});

const descargaUsuarioGlobalError = () => ({
    type: USUARIO_GLOBAL_ERROR,
    payload: true
});



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

//Obtener todos los usuarios tipo Alumno
export function obtenerUsuariosALUM(){
    return async (dispatch) => {
        dispatch( obtenerAlumInicio() );

        try {
            const respuesta = await clienteAxios.get("/api/usuarios/alum");
            dispatch( obtenerAlumExito(respuesta.data) );
        } catch (error) {
            //console.log(error);
            dispatch( obtenerAlumError() );
        }
    }
}


const obtenerAlumInicio = () => ({
    type: COMENZAR_DESCARGA_ALUM,
    payload: true
});

const obtenerAlumExito = (alumnos) => ({
    type: DESCARGAR_ALUM_EXITO,
    payload: alumnos
});

const obtenerAlumError = () => ({
    type: DESCARGAR_ALUM_ERROR,
    payload: true
});


