import React, { Component } from 'react';
import '../css/Login.css';
import axios from 'axios';
//import md5 from 'md5'; /**Cifra las contraseñas */
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import uaglogo from '../css/UAGPrincipal.jpeg';
import uaglogodos from '../css/logo_leyenda.png';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component {

    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async (e) => {
        e.preventDefault();

        console.log( this.state.form );
        //Validar si los campos estan llenos 
        if( !Object.values(this.state.form).every( valor =>  valor !== "") ){
            Swal.fire({
                icon: 'error',
                title: 'Campos vacios',
                text: 'Todos los campos son obligatorios!',
            });
            return;
        }

        //md5(this.state.form.password)
        
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password}})
        
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                cookies.set('role', respuesta.role, {path: "/"});

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Bienvenido',
                    showConfirmButton: false,
                    timer: 1500
                });

                setTimeout(() => {
                    respuesta.role === "Alumno" ? window.location.href="./dashboard-alumno" : window.location.href="./dashboard";
                }, 1500);

            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error al iniciar sesión',
                    text: 'El usuario o contraseña son incorrectos!',
                });
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./dashboard";
        }
    }
    

    render() {
        return (
            <div className="principal">
                <div className="containerPrincipal">
                </div>
                <div className="containerSecundario">
                        <img src={uaglogodos} alt='logo-leyenda' className='uaglogo-leyenda'/>
                        <form className="form-group" onSubmit={ (e) => this.iniciarSesion(e)}>
                            <input
                                type="text"
                                placeholder="Usuario"
                                className="form-control"
                                name="username"
                                onChange={this.handleChange}
                            />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="form-control"
                                name="password"
                                onChange={this.handleChange}
                            />
                            <input type="submit" className="btn btn-primary" value="Ingresar"/>
                            {/*<button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Ingresar</button>*/}
                        </form>
                </div>
            </div>
        );
    }
}

export default Login;