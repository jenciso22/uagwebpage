import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarAlumno from '../Components/Navbar/NavbarAlumno'
import Tabs from "../Components/Perfil/Tabs";
import Cookies from 'universal-cookie';
import { useDispatch } from "react-redux";
import { obtenerUsuariosGlobal } from "../actions/usuariosActions";

const MiperfilAlumno = () => {
    const dispatch = useDispatch();
    const cookies = new Cookies();
    const usuarioGlobal = (id) => dispatch(obtenerUsuariosGlobal(id));

    useEffect( () => {
        const ejecutar = async () => {
            await usuarioGlobal(cookies.get("idUsuario"));
        }
        ejecutar();
        //eslint-disable-next-line
    }, []);
    return ( 
        <>
            <NavbarAlumno />
                <div className='miperfil dashboard-container'>
                    {/* <h1>Mi perfil</h1> */}
                </div>
                <Tabs/>
            <Footer />  
        </>
     );
}
 
export default MiperfilAlumno;