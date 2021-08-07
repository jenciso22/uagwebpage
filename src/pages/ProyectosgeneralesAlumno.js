import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'
import TableproyectosgeneralesA from '../Components/Tables/TableproyectosgeneralesA'


function ProyectosgeneralesAlumno() {
    return (
        <>
            <NavbarAlumno />
                <div className='tablemisproyectos'>
                    <br />
                    <br />
                <TableproyectosgeneralesA />
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
