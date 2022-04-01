import React, { useEffect } from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro';
import TabsProfesor  from "../Components/Perfil/TabsProfesor";
import Footer from '../Components/Footer/Footer';
import Cookies from 'universal-cookie';
import { useDispatch } from "react-redux";
import { obtenerUsuariosGlobal } from "../actions/usuariosActions";

const Miperfil = () => {


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