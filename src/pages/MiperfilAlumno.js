import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'
import Tabs from "../Components/Perfil/Tabs";


function MiperfilAlumno() {
    return (
        <>
            <NavbarAlumno />
                <div className='miperfil'>
                    <h1>Mi perfil</h1>
                </div>
                <Tabs/>
            <Footer />  
        </>
    )
}

export default MiperfilAlumno
