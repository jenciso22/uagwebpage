import React from 'react';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import Footer from '../Components/Footer/Footer';
import Tableproyectosgenerales from '../Components/Tables/Tableproyectosgenerales';

function Proyectosgenerales() {
    return (
        <>
            <NavbarAlumno/>
                <div className='tablemisproyectos dashboard-container'>
                    <Tableproyectosgenerales />
                </div>
            <Footer />  
        </>
    )
}

export default Proyectosgenerales
