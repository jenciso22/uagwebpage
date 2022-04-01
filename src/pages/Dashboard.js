import React, { useEffect } from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro.js';
import Footer from '../Components/Footer/Footer';
import '../css/Dashboard.css';
import Cookies from 'universal-cookie';
import MisproyectosDashboard from '../Components/Tables/TablesDashboardMaestro/MisproyectosDashboard';
import MissolicitudesDashboard from '../Components/Tables/TablesDashboardMaestro/MissolicitudesDashboard';
import ProyectosgeneralesDashboard from '../Components/Tables/TablesDashboardMaestro/ProyectosgeneralesDashboard';
import { useDispatch } from "react-redux";
import { obtenerProyectosGenerales, obtenerProyectosMTRS  } from '../actions/proyectosActions.js';
import { obtenerSolicitudesMtrs } from "../actions/solicitudesActions"; 
import { renovarSesionAuth } from "../actions/authActions";

const Dashboard = () => {

    const dispatch = useDispatch();
    const cookies = new Cookies();
    const cargaProyectos = () => dispatch(obtenerProyectosGenerales());
    const cargaProyectosMtrs = id => dispatch(obtenerProyectosMTRS(id));
    const cargaSolicitudesMaestros = (id) => dispatch(obtenerSolicitudesMtrs(id));
    const renovarSesion = token => dispatch(renovarSesionAuth(token));

    useEffect(() => {
        if(cookies.get('token')){
            const ejecutar = async () => {
                await renovarSesion(cookies.get("token"));
                await cargaProyectos();
                await cargaSolicitudesMaestros(cookies.get("idUsuario"));
                await cargaProyectosMtrs(cookies.get("idUsuario"));
            }
            ejecutar();
        }else{
            window.location.href="./login";
        }
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