import React, { useState } from 'react';
import PestanaPerfil from './pestanaPerfil';

const CambiosToggle = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return ( 
        <>
            <div className="bloc-tabs">
                <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => setToggleState(1)}
                >
                Acerca de Mi
                </button>
                <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                >
                Informacion Escolar
                </button>
                <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
                >
                Informacion Profesional
                </button>
                <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
                >
                Proyecto de Titulacion
                </button>
                <button
                className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
                >
                Contacto
                </button>
            </div>
            <PestanaPerfil toggleState={toggleState}/>
        </>
     );
}
 
export default CambiosToggle;