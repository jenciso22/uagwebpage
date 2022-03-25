import TogglePProfesor from "./TogglePProfesor";
import  "./Proyectoform.css";
import NavbarAlumno from '../Navbar/NavbarAlumno';
import Footer from '../Footer/Footer';

function ProyectoP () {
  return (
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

  );
}
 
export default ProyectoP;