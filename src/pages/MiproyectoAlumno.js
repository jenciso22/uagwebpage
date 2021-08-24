import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import TablemiproyectoA from '../Components/Tables/TablemiproyectoA';

function MiproyectoAlumno() {
    return (
        <>
            <NavbarAlumno />
                <div className='tablemisproyectos dashboard-container'>
                    <TablemiproyectoA />
                </div>
            <Footer />  
        </>
    )
}

export default MiproyectoAlumno
