import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'
import TableproyectosgeneralesA from '../Components/Tables/TableproyectosgeneralesA'


function ProyectosgeneralesAlumno() {
    return (
        <>
            <NavbarAlumno />
                <div className='tablemisproyectos dashboard-container'>
                    <TableproyectosgeneralesA />
                </div>
            <Footer />  
        </>
    )
}

export default ProyectosgeneralesAlumno
