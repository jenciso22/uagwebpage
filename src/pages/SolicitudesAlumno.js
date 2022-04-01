import React, { useEffect } from 'react';
import Footer from '../Components/Footer/Footer';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import MisolicitudDashboard from '../Components/Tables/TablesDashboardAlumno/MisolicitudDashboard';
import { useDispatch } from "react-redux";
import Cookies from 'universal-cookie';
import { obtenerSolicitudesAlum } from "../actions/solicitudesActions";

const SolicitudesAlumno = () => {

    const dispatch = useDispatch();
    const obtenerSolicitudesAlumno = (id) => dispatch(obtenerSolicitudesAlum(id));
    const cookies = new Cookies();
    useEffect(() => {
        const ejecutar =  async () => {
            await obtenerSolicitudesAlumno(cookies.get("idUsuario"));
        }
        ejecutar();
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <NavbarAlumno />
                <div className='tablemisproyectos dashboard-container'>
                    <MisolicitudDashboard />
                </div>
            <Footer />  
        </>
    )
}

export default SolicitudesAlumno
