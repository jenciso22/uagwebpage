import React, { useEffect } from 'react';
import TogglePProfesor from "./TogglePProfesor";
import  "./Proyectoform.css";
import NavbarAlumno from '../Navbar/NavbarAlumno';
import Footer from '../Footer/Footer';
import { useDispatch } from "react-redux";
import { renovarSesionAuth } from "../../actions/authActions";
import Cookies from 'universal-cookie';

const ProyectoP = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const renovarToken = token => dispatch(renovarSesionAuth(token));
  
  useEffect(() => {
    if(cookies.get('token')){
      const renovar = async () => {
        await renovarToken(cookies.get("token"));
      }
      renovar();
    }else{
      window.location.href="./login";
    }
    //eslint-disable-next-line
  }, []);
   
   return(
   < >
        <NavbarAlumno/>
          <div className='full-container'>
            <div className="containernewform">
              {/*abajo container */}
              <TogglePProfesor />
            </div>
          </div>
        <Footer />  
    </>
   )
}
 
export default ProyectoP;