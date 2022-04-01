import React, { useState } from 'react';
import PestanaPerfil from './pestanaPerfil';
import { arrayToggle } from "./arrayToggle";


const CambiosToggle = () => {

    const [toggleState, setToggleState] = useState(1);

    return ( 
        <>
            <div className="bloc-tabs">
                {arrayToggle.map( ( valor ) => (
                    <button 
                    className={ toggleState === valor.valor ? valor.classs2 : valor.class } 
                    key={valor.valor}
                    onClick={() => setToggleState( valor.valor )}>
                        {valor.text}
                    </button>
                ))}
            </div>
            <PestanaPerfil toggleState={toggleState}/>
        </>
     );
}
 
export default CambiosToggle;