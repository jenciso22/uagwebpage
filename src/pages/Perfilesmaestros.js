import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'
import TableperfilmaestrosA from '../Components/Tables/TableperfilmaestrosA'

function Perfilesmaestros () {
    return (
        <>
            <NavbarAlumno/>
                <div className='tablemisproyectos dashboard-container'>
                    <TableperfilmaestrosA />
                </div>
            <Footer />  
        </>
    )
}

export default Perfilesmaestros
