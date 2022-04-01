import React, { useEffect } from 'react';
import '../css/Dashboard.css';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import MiproyectoDashboard from '../Components/Tables/TablesDashboardAlumno/MiproyectoDashboard';
import MisolicitudDashboard from '../Components/Tables/TablesDashboardAlumno/MisolicitudDashboard';
import ProyectosgeneralesDashboard from '../Components/Tables/TablesDashboardMaestro/ProyectosgeneralesDashboard';
import { useDispatch } from "react-redux";
import Cookies from 'universal-cookie';
import { obtenerProyectosGenerales  } from '../actions/proyectosActions.js';
import { obtenerSolicitudesAlum } from "../actions/solicitudesActions";

const DashboardAlumno = () =>  {

    const dispatch = useDispatch();
    const cargaProyectos = () => dispatch(obtenerProyectosGenerales());
    const obtenerSolicitudesAlumno = (id) => dispatch(obtenerSolicitudesAlum(id));
    const cookies = new Cookies();
    useEffect( () => {
        const ejecutar = async () => {
            await cargaProyectos();
            await obtenerSolicitudesAlumno(cookies.get("idUsuario"));
        }
        ejecutar();
        //eslint-disable-next-line
    }, []);

        return(
            <>
                <NavbarAlumno/>
                <div className="dashboard-container">
                    <MiproyectoDashboard />
                    <ProyectosgeneralesDashboard/>
                    <MisolicitudDashboard />
                </div>
            </>
        )
}

export default DashboardAlumno;