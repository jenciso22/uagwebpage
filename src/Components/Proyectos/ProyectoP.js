// import "./Tabs.css";
import TogglePProfesor from "./TogglePProfesor";
import  "./Proyectoform.css";


const ProyectoP = () => {


  return (
    <>
    <div className='full-container'>
        <div className="title-proyectos">
            <h1>AGREGAR PROYECTO</h1>
        </div>
        <div className="containernewform">
        {/*abajo container */}
        <TogglePProfesor />
        </div>
    </div>
    </>
  );
}
 
export default ProyectoP;