import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'
import TableproyectosgeneralesA from '../Components/Tables/TableproyectosgeneralesA'
import { useDispatch } from "react-redux";
import { obtenerProyectosGenerales  } from '../actions/proyectosActions.js';
import { renovarSesionAuth } from "../actions/authActions";
import Cookies from 'universal-cookie';

const ProyectosgeneralesAlumno = () => {

    const dispatch = useDispatch();
    const cookies = new Cookies();
    const renovarToken = token => dispatch(renovarSesionAuth(token));
    const cargaProyectos = () => dispatch(obtenerProyectosGenerales());

    useEffect(  () => {
        if(cookies.get('token')){
            const ejecutar = async () => {
                await renovarToken(cookies.get("token"));
                await cargaProyectos();
            }
            ejecutar();
          }else{
            window.location.href="./login";
          }
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <NavbarAlumno />
                <div className='tablemisproyectos dashboard-container'>
                    <TableproyectosgeneralesA />
                </div>
            <Footer />  
        </>
     );
}
 
export default ProyectosgeneralesAlumno;
