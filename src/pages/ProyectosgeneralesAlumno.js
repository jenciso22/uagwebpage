import React from 'react'
import Footer from '../Components/Footer/Footer'
import Tableproyectosgenerales from '../Components/Tables/Tableproyectosgenerales'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'

function ProyectosgeneralesAlumno() {
    return (
        <>
            <NavbarAlumno />
                <div className='tablemisproyectos'>
                    <br />
                    <br />
                <Tableproyectosgenerales />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                </div>
            <Footer />  
        </>
    )
}

export default ProyectosgeneralesAlumno
