import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'
import TableperfilmaestrosA from '../Components/Tables/TableperfilmaestrosA'
import { useDispatch } from "react-redux";
import { obtenerUsuariosMTRS } from "../actions/usuariosActions";

const Perfilmaestros = () => {

    const dispatch = useDispatch();
    const cargaMtrs = () => dispatch(obtenerUsuariosMTRS());

    useEffect( () => {
        const ejecutar = async () => {
            await cargaMtrs();
        }
        ejecutar();
        //eslint-disable-next-line
    }, []);
    

    return (
        <>
            <NavbarAlumno/>
                <div className='tablemisproyectos dashboard-container'>
                    <TableperfilmaestrosA/>
                </div>
            <Footer />  
        </>
    );
}
 
export default Perfilmaestros;