import React, { useEffect } from 'react';
import Footer from '../Components/Footer/Footer';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import MiproyectoDashboard from '../Components/Tables/TablesDashboardAlumno/MiproyectoDashboard';
import Cookies from 'universal-cookie';
import { useDispatch } from "react-redux";
import { obtenerSolicitudesAlum } from "../actions/solicitudesActions";

const MiproyectoAlumno = () => {
    const dispatch = useDispatch();
    const obtenerSolicitudesAlumno = (id) => dispatch(obtenerSolicitudesAlum(id));

    const cookies = new Cookies();
    useEffect( () => {
        const ejecutar = async () => {
            await obtenerSolicitudesAlumno(cookies.get("idUsuario"));
        }
        ejecutar();
        //eslint-disable-next-line
    }, []);
    return (
        <>
            <NavbarAlumno />
                <div className='tablemisproyectos dashboard-container'>
                    <MiproyectoDashboard/>
                </div>
            <Footer />  
        </>
    )
}

export default MiproyectoAlumno
