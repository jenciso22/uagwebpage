import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'
import TablemisolicitudA from '../Components/Tables/TablemisolicitudA'

function SolicitudesAlumno () {
    return (
        <>
            <NavbarAlumno />
                <div className='tablemisproyectos dashboard-container'>
                    <TablemisolicitudA />
                </div>
            <Footer />  
        </>
    )
}

export default SolicitudesAlumno
