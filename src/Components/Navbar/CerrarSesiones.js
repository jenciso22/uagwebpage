import React, { Component } from 'react';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

class CerrarSesiones extends Component {

    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='/';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno: '+cookies.get('apellido_materno'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            <div className='boton-cerrar-session'>
                <div>
                <a href='/' onClick={()=>this.cerrarSesion()} className='btncerrar-sesion'>Cerrar Sesión</a>
                </div>
            </div>
        );
    }
}

export default CerrarSesiones;