import React from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro';
import Footer from '../Components/Footer/Footer';
import Tableperfilalumnos from '../Components/Tables/Tableperfilalumnos';

function Perfilesalumnos() {
    return (
        <>
            <NavbarMaestro/> 
                <div className='tablemisproyectos dashboard-container'>
                    <Tableperfilalumnos />
                </div>
            <Footer />  
        </>
    )
}

export default Perfilesalumnos
