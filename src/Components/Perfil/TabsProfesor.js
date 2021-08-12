import React, { useState } from "react";
import "./Tabs.css";
import Avatar from "../../assets/avatar.png";
import ToggleUnoP from "./tabs/togglesProfesor/toggleUnoP";

const TabsProfesor = () => {
  const [toggleState, setToggleState] = useState(1);
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  return ( 
      <>
        <div className="containernew">
          <div className="container1">

            <div className="avatar-normal">
                <img src={Avatar} alt="avatar"/>
            </div>

            <div className="user-name1">
              <p>Jose William Enciso Guzman</p>
            </div>
          </div>
          <div className="container">
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
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
                Contacto
              </button>
              {/* <button
                className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
              >
                Contacto
              </button> */}
            </div>
  
            <div className="content-tabs">
              <ToggleUnoP/>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default TabsProfesor;