import React, { useEffect } from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro.js';
import Footer from '../Components/Footer/Footer';
import '../css/Dashboard.css';
import MisproyectosDashboard from '../Components/Tables/TablesDashboardMaestro/MisproyectosDashboard';
import MissolicitudesDashboard from '../Components/Tables/TablesDashboardMaestro/MissolicitudesDashboard';
import ProyectosgeneralesDashboard from '../Components/Tables/TablesDashboardMaestro/ProyectosgeneralesDashboard';
import { useDispatch } from "react-redux";
import { obtenerProyectosGenerales, obtenerProyectosMTRS  } from '../actions/proyectosActions.js';
import { obtenerSolicitudesMtrs } from "../actions/solicitudesActions"; 
const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect( async () => {
        const cargaProyectos = () => dispatch(obtenerProyectosGenerales());
        const cargaProyectosMtrs = () => dispatch(obtenerProyectosMTRS());
        const cargaSolicitudesMaestros = () => dispatch(obtenerSolicitudesMtrs());
        await cargaProyectos();
        await cargaProyectosMtrs();
        await cargaSolicitudesMaestros();
        //eslint-disable-next-line
    }, []);
    

    return(
        <>
            <NavbarMaestro/> 
            <div className='dashboard-container'>
                <MisproyectosDashboard/>
                <ProyectosgeneralesDashboard />
                <MissolicitudesDashboard />
                {/* <h1>{ datos.result[0].nombre }</h1> */}
            </div>
            <Footer />
        </>
    )
}
 
export default Dashboard;