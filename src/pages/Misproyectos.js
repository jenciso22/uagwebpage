import React, { useEffect } from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro';
import Footer from '../Components/Footer/Footer';
import Tablemisproyectos from '../Components/Tables/Tablemisproyectos';
import { useDispatch } from "react-redux";
import { obtenerProyectosMTRS  } from '../actions/proyectosActions.js';

const Misproyectos = () => {

    const dispatch = useDispatch();
    
    useEffect(async () => {
        const cargaProyectosMtrs = datos => dispatch(obtenerProyectosMTRS());
        await cargaProyectosMtrs();
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <NavbarMaestro/> 
                <div className='tablemisproyectos dashboard-container'>
                    <Tablemisproyectos />
                </div>
            <Footer />  
        </>
    )
}
 
export default Misproyectos;