import React from 'react';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import Footer from '../Components/Footer/Footer';
import Tablemisproyectos from '../Components/Tables/Tablemisproyectos';

function Misproyectos() {
    return (
        <>
            <NavbarAlumno/>
                <div className='tablemisproyectos dashboard-container'>
                    <Tablemisproyectos />
                </div>
            <Footer />  
        </>
    )
}

export default Misproyectos
