import React, { useEffect } from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro';
import Footer from '../Components/Footer/Footer';
import { useDispatch } from "react-redux";
import ProyectosgeneralesDashboard from '../Components/Tables/TablesDashboardMaestro/ProyectosgeneralesDashboard';
import { obtenerProyectosGenerales  } from '../actions/proyectosActions.js';
// import Tableproyectosgenerales from '../Components/Tables/Tableproyectosgenerales';
// <Tableproyectosgenerales/>
const Proyectosgenerales = () => {

    const dispatch = useDispatch();

    useEffect(async () => {
        const cargaProyectos = datos => dispatch(obtenerProyectosGenerales());
        await cargaProyectos();
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <NavbarMaestro/> 
                <div className='tablemisproyectos dashboard-container'>
                    <ProyectosgeneralesDashboard/>
                </div>
            <Footer />  
        </>
    )
}
 
export default Proyectosgenerales;
