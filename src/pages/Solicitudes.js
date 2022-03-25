import React, { useEffect } from 'react';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import Footer from '../Components/Footer/Footer';
import Tablesolicitudes from '../Components/Tables/Tablesolicitudes';
import { useDispatch } from "react-redux";
import { obtenerSolicitudesMtrs } from "../actions/solicitudesActions"; 

const Solicitudes = () => {

    const dispatch = useDispatch();

    useEffect(async () => {
        const cargaSolicitudesMaestros = datos => dispatch(obtenerSolicitudesMtrs());
        await cargaSolicitudesMaestros();
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <NavbarAlumno/>
                <div className='tablemisproyectos dashboard-container'>
                    <Tablesolicitudes />
                </div>
            <Footer />  
        </>
    )
}
 
export default Solicitudes;