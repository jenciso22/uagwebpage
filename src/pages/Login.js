import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { iniciarSesionAuth } from "../actions/authActions";
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import '../css/Login.css';
import uaglogodos from '../css/logo_leyenda.png';


const Login = () => {
    
    const [datos, setDatos] = useState({ correo: "lorenzo20@gmail.com", password: "123456" });
    const { correo, password } =  datos;
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const autenticado = useSelector( state => state.auth.usuario ); 

    useEffect(() => {
        if(cookies.get('username')){
             window.location.href="./dashboard";
        }
        //console.log(autenticado);
    }, [autenticado])

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cargaAuth = datos => dispatch(iniciarSesionAuth(datos));

    const iniciarSesion = e => {
        e.preventDefault();

        //Validar si los campos estan llenos 
        if( !Object.values(datos).every( valor =>  valor !== "") ){
            Swal.fire({
                icon: 'error',
                title: 'Campos vacios',
                text: 'Todos los campos son obligatorios!',
            });
            return;
        } 

        cargaAuth(datos);
    }

    return ( 
                <div className="principal">
                    <div className="containerPrincipal">
                    </div>
                    <div className="containerSecundario">
                            <img src={uaglogodos} alt='logo-leyenda' className='uaglogo-leyenda'/>
                            <form className="form-group" onSubmit={ (e) => iniciarSesion(e)}>
                                <input
                                    type="text"
                                    placeholder="Usuario"
                                    className="form-control"
                                    name="correo"
                                    value={correo}
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                                <input type="submit" className="btn btn-primary" value="Ingresar"/>
                                {/*<button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Ingresar</button>*/}
                            </form>
                    </div>
                </div>
    );
}
 
export default Login;











// await axios.get(baseUrl, {params: {username: state.form.username, password: state.form.password}})
        // .then( response=>{
        //    return response.data;
        //  })
        //  .then(response=>{
        //      if(response.length>0){
        //          var respuesta=response[0];
        //          cookies.set('id', respuesta.id, {path: "/"});
        //          cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
        //          cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
        //          cookies.set('nombre', respuesta.nombre, {path: "/"});
        //          cookies.set('username', respuesta.username, {path: "/"});
        //          cookies.set('role', respuesta.role, {path: "/"});
        //          Swal.fire({
        //              position: 'top-end',
        //              icon: 'success',
        //              title: 'Bienvenido',
        //              showConfirmButton: false,
        //              timer: 1500
        //          });

        //          setTimeout(() => {
        //              respuesta.role === "Alumno" ? window.location.href="./dashboard-alumno" : window.location.href="./dashboard";
        //          }, 1500);

        //      }else{
        //          Swal.fire({
        //              icon: 'error',
        //              title: 'Error al iniciar sesión',
        //              text: 'El usuario o contraseña son incorrectos!',
        //          });
        //      }
        //  })
        //  .catch(error=>{
        //      console.log(error, "aqui");
        //  })