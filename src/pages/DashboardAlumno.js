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
            <>
                <NavbarAlumno />
                <div className="dashboard-container">
                    <MiproyectoDashboard />
                    <ProyectosgeneralesDashboardA />
                    <MisolicitudDashboard />
                </div>
                <Footer />
            </>
        )
    }
export default DashboardAlumno;