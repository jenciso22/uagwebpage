import React, { useEffect } from 'react';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import Footer from '../Components/Footer/Footer';
import '../css/Dashboard.css';
import MisproyectosDashboard from '../Components/Tables/TablesDashboardMaestro/MisproyectosDashboard';
import MissolicitudesDashboard from '../Components/Tables/TablesDashboardMaestro/MissolicitudesDashboard';
import ProyectosgeneralesDashboard from '../Components/Tables/TablesDashboardMaestro/ProyectosgeneralesDashboard';
// import Tablemisproyectos from '../Components/Tables/Tablemisproyectos';
// import Tableproyectosgenerales from '../Components/Tables/Tableproyectosgenerales';
// import Tablesolicitudes from '../Components/Tables/Tablesolicitudes';
import { useSelector, useDispatch } from "react-redux";
import { obtenerUsuarios } from "../actions/usuariosActions";
function Dashboard () {

        const dispatch = useDispatch();

        useEffect(() => {
            const cargarUsuarios = () => dispatch( obtenerUsuarios() );
            cargarUsuarios();
        }, []);
    
        const datos = useSelector( state => state.usuarios.usuarios );
        console.log(datos);

        return(
            <>
                <NavbarAlumno/> 
                <div className='dashboard-container'>
                    <MisproyectosDashboard />
                    <ProyectosgeneralesDashboard />
                    <MissolicitudesDashboard />
                    {/* <h1>{ datos.result[0].nombre }</h1> */}
                </div>
                <Footer />
            </>
        )
    }
export default Dashboard;