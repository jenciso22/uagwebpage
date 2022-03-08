import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Miperfil from './pages/Miperfil'
import Misproyectos from './pages/Misproyectos'
import Perfilesalumnos from './pages/Perfilesalumnos'
import Proyectosgenerales from './pages/Proyectosgenerales'
import Solicitudes from './pages/Solicitudes'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardAlumno from './pages/DashboardAlumno';
import MiperfilAlumno from './pages/MiperfilAlumno';
import Perfilesmaestros from './pages/Perfilesmaestros';
import ProyectosgeneralesAlumno from './pages/ProyectosgeneralesAlumno';
import SolicitudesAlumno from './pages/SolicitudesAlumno';
import MiproyectoAlumno from './pages/MiproyectoAlumno';
// import Tabs from './Components/Perfil/Tabs';
// import TabsProfesor from './Components/Perfil/TabsProfesor';
import ProyectoP from './Components/Proyectos/ProyectoP';


// import TableMisProyectos from './Components/Tables/Tablemisproyectos';




function Routes() {
  return (
    <>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/dashboard-alumno' component={DashboardAlumno}/>
          <Route exact path='/perfil' component={Miperfil}/>
          <Route exact path='/perfil-alumno' component={MiperfilAlumno}/>
          <Route exact path='/proyectos' component={Misproyectos}/>
          <Route exact path='/proyecto-alumno' component={MiproyectoAlumno}/>
          <Route exact path='/alumnos' component={Perfilesalumnos}/>
          <Route exact path='/maestros' component={Perfilesmaestros}/>
          <Route exact path='/proyectosgenerales' component={Proyectosgenerales}/>
          <Route exact path='/proyectosgenerales-alumno' component={ProyectosgeneralesAlumno}/>
          <Route exact path='/solicitudes' component={Solicitudes}/>
          <Route exact path='/solicitudes-alumno' component={SolicitudesAlumno}/>
          {/* <Route exact path='/tabs' component={Tabs}/>
          <Route exact path='/tabsprofesor' component={TabsProfesor}/> */}
          <Route exact path='/proyectop' component={ProyectoP}/>
          
        </Switch>
      </Provider>
    </Router>
    </>

    
  );
}

export default Routes;
