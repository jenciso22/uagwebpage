import React, { useEffect } from 'react';
import NavbarMaestro  from '../Components/Navbar/NavbarMaestro';
import Footer from '../Components/Footer/Footer';
import Tablesolicitudes from '../Components/Tables/Tablesolicitudes';
import { useDispatch, useSelector } from "react-redux";
import { obtenerSolicitudesMtrs } from "../actions/solicitudesActions"; 
import { renovarSesionAuth } from "../actions/authActions";
import Cookies from 'universal-cookie';

const Solicitudes = () => {

    const dispatch = useDispatch();
    const cookies = new Cookies();
    const renovarToken = token => dispatch(renovarSesionAuth(token));
    const cargaSolicitudesMaestros = id => dispatch(obtenerSolicitudesMtrs(id));
    const usuario = useSelector( state => state.auth.usuario  );

    useEffect(() => {
        if(cookies.get('token')){
            const ejecutar = async () => {
                await renovarToken(cookies.get("token"));
                if( usuario ){
                    await cargaSolicitudesMaestros(usuario.idUsuario);
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
                    <Tablesolicitudes />
                </div>
            <Footer />  
        </>
    )
}
 
export default Solicitudes;