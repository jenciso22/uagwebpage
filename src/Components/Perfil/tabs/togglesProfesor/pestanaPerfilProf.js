import React from 'react';
import ToggleUnoP from '../togglesProfesor/toggleUnoP';
import ToggleDosP from '../togglesProfesor/toggleDosP';
import ToggleTresP from '../togglesProfesor/toggleTresP';
import ToggleCuatroP from '../togglesProfesor/toggleCuatroP';


const PestanaPerfilProf = ( props ) => {
    return ( 
        <div className="content-tabs">
            <ToggleUnoP toggleState={props.toggleState}/>
            <ToggleDosP toggleState={props.toggleState}/>
            <ToggleTresP toggleState={props.toggleState}/>
            <ToggleCuatroP toggleState={props.toggleState}/>
        </div>
     );
}
 
export default PestanaPerfilProf;