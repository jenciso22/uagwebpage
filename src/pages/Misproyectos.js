import React, { useEffect } from 'react';
import NavbarMaestro from '../Components/Navbar/NavbarMaestro';
import Footer from '../Components/Footer/Footer';
import Tablemisproyectos from '../Components/Tables/Tablemisproyectos';
import { useDispatch, useSelector } from "react-redux";
import { obtenerProyectosMTRS  } from '../actions/proyectosActions.js';
import Cookies from 'universal-cookie';
import { renovarSesionAuth } from "../actions/authActions";

const Misproyectos = () => {

    const dispatch = useDispatch();
    const cookies = new Cookies();
    const cargaProyectosMtrs = id => dispatch(obtenerProyectosMTRS(id));
    const renovarSesion = token => dispatch(renovarSesionAuth(token));
    const usuario = useSelector( state => state.auth.usuario );

    useEffect(() => {
        if(cookies.get('token')){
            const ejecutar = async () => {
                await renovarSesion(cookies.get("token"));
                if( usuario ){
                    await cargaProyectosMtrs(cookies.get("idUsuario"));
                }
            }
            ejecutar();
        }else{
            window.location.href="./login";
        }
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