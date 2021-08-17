import React from 'react';
import NavbarAlumno from '../Components/Navbar/NavbarAlumno';
import TabsProfesor  from "../Components/Perfil/TabsProfesor";
import Footer from '../Components/Footer/Footer';

function Miperfil() {
    return (
        <>
            <NavbarAlumno/>
                <div className='miperfil'>
                    <h1>Mi perfil</h1>
                </div>
                <TabsProfesor/>
            <Footer />  
        </>
    )
}

export default Miperfil
