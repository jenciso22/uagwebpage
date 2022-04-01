import React, { useEffect } from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro';
import Footer from '../Components/Footer/Footer';
import Tableperfilalumnos from '../Components/Tables/Tableperfilalumnos';
import { useDispatch } from "react-redux";
import { obtenerUsuariosALUM } from "../actions/usuariosActions";

const Perfilalumnos = () => {
    
    const dispatch = useDispatch();
    const obtenerAlumnos = () => dispatch(obtenerUsuariosALUM());

    useEffect( () => {
        const ejecutar = async () => {
            await obtenerAlumnos();
        }
        ejecutar();
        //eslint-disable-next-line
    }, []);
    
    return (
        <>
            <NavbarMaestro/> 
                <div className='tablemisproyectos dashboard-container'>
                    <Tableperfilalumnos />
                </div>
            <Footer />  
        </>
    );

}
 
export default Perfilalumnos;
