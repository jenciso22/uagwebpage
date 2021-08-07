import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import '../css/Dashboard.css'
import MisproyectosDashboard from '../Components/Tables/TablesDashboardMaestro/MisproyectosDashboard';
import MissolicitudesDashboard from '../Components/Tables/TablesDashboardMaestro/MissolicitudesDashboard';
import ProyectosgeneralesDashboard from '../Components/Tables/TablesDashboardMaestro/ProyectosgeneralesDashboard';
// import Tablemisproyectos from '../Components/Tables/Tablemisproyectos';
// import Tableproyectosgenerales from '../Components/Tables/Tableproyectosgenerales';
// import Tablesolicitudes from '../Components/Tables/Tablesolicitudes';


function Dashboard () {

        return(
            <div className='dashboard-container'>
                <Navbar /> 
                <br />
                <MisproyectosDashboard />
                <br />
                <MissolicitudesDashboard />
                <br />
                <ProyectosgeneralesDashboard />
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
export default Dashboard;