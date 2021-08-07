import React, { Component } from 'react';
import '../css/Login.css';
import axios from 'axios';
import md5 from 'md5';
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

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
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

                if(respuesta.role==='Alumno'){
                alert(`Bienvenido Alumno - ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./dashboard-alumno";} else{
                alert(`Bienvenido Maestro - ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                    window.location.href="./dashboard";
                }

            }else{
                alert('El usuario o la contraseña no son correctos');
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
    <div className="containerPrincipal">
        <div className='slide-image'>
        <img src={uaglogo} alt='imagenuag' className='uaglogo-principal'/>
        </div>
        <div className="containerSecundario">
        <img src={uaglogodos} alt='logo-leyenda' className='uaglogo-leyenda'/>
          <div className="form-group">
            <label> </label>
            <br />
            <input
              type="text"
              placeholder="Usuario"
              className="form-control"
              name="username"
              onChange={this.handleChange}

            />
            <br />
            <label> </label>
            <br />
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Ingresar</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Login;