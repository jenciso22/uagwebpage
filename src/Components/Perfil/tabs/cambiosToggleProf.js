import React, { useState } from 'react';
import { arrayToggleProfesores } from "./arrayToggle";
import PestanaPerfilProf from "./togglesProfesor/pestanaPerfilProf";


const CambiosToggleProf = () => {

    const [toggleState, setToggleState] = useState(1);

    return ( 
        <>
            <div className="bloc-tabs">
                {arrayToggleProfesores.map( ( valor ) => (
                    <button className={ toggleState === valor.valor ? valor.classs2 : valor.class } onClick={() => setToggleState( valor.valor )}>
                        {valor.text}
                    </button>
                ))}
            </div>
            <PestanaPerfilProf toggleState={toggleState}/>
        </>
     );
}
 
export default CambiosToggleProf;