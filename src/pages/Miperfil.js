import React from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro';
import TabsProfesor  from "../Components/Perfil/TabsProfesor";
import Footer from '../Components/Footer/Footer';

function Miperfil() {
    return (
        <>
            <NavbarMaestro/> 
                <div className='miperfil dashboard-container'>
                    {/* <h1>Mi perfil</h1> */}
                </div>
                <TabsProfesor/>
            <Footer />  
        </>
    )
}

export default Miperfil;
