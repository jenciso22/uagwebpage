import React from 'react';
import Footer from '../Components/Footer/Footer'
import '../css/Dashboard.css'
// import MisproyectosDashboard from '../Components/Tables/TablesDashboardMaestro/MisproyectosDashboard';
// import MissolicitudesDashboard from '../Components/Tables/TablesDashboardMaestro/MissolicitudesDashboard';
// import ProyectosgeneralesDashboard from '../Components/Tables/TablesDashboardMaestro/ProyectosgeneralesDashboard';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import MiproyectoDashboard from '../Components/Tables/TablesDashboardAlumno/MiproyectoDashboard';
import MisolicitudDashboard from '../Components/Tables/TablesDashboardAlumno/MisolicitudDashboard';
import ProyectosgeneralesDashboardA from '../Components/Tables/TablesDashboardAlumno/ProyectosgeneralesDashboardA';
// import Tablemisproyectos from '../Components/Tables/Tablemisproyectos';
// import Tableproyectosgenerales from '../Components/Tables/Tableproyectosgenerales';
// import Tablesolicitudes from '../Components/Tables/Tablesolicitudes';


function DashboardAlumno () {

        return(
    
            <div className='dashboard-container'>
                <NavbarAlumno />
                <br />
                <MiproyectoDashboard />
                <br />
                <ProyectosgeneralesDashboardA />
                <br />
                <MisolicitudDashboard />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </div>
        )
    }
export default DashboardAlumno;