import React from 'react';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import Footer from '../Components/Footer/Footer';
import Tableperfilalumnos from '../Components/Tables/Tableperfilalumnos';

function Perfilesalumnos() {
    return (
        <>
            <NavbarAlumno/>
                <div className='tablemisproyectos dashboard-container'>
                    <Tableperfilalumnos />
                </div>
            <Footer />  
        </>
    )
}

export default Perfilesalumnos
