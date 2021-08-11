import React from 'react';
import ToggleUno from "./toggles/toggleUno";
import ToggleDos from './toggles/toogleDos';
import ToggleTres from "./toggles/toggleTres";
import ToggleCuatro from "./toggles/toggleCuatro";
import ToggleCinco from "./toggles/toggleCinco";

const PestanaPerfil = (props) => {

    return ( 
        <div className="content-tabs">
            <ToggleUno toggleState={props.toggleState}/>
            <ToggleDos toggleState={props.toggleState}/>
            <ToggleTres toggleState={props.toggleState}/>
            <ToggleCuatro toggleState={props.toggleState}/>
            <ToggleCinco toggleState={props.toggleState}/>
        </div>
     );
}
 
export default PestanaPerfil;