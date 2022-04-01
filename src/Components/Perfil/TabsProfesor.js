// import React, { useState } from "react";
import "./Tabs.css";
import Avatar from "../../assets/avatar.png";
import ContainerTabsProfesores from "./tabs/containerTabsProfesores";
import { useSelector } from "react-redux";

const TabsProfesor = () => {
  const usuario = useSelector( state => state.usuarios.usuarioGlobal );
  return ( 
      <>
        <div className="containernew">
          <div className="container1">
              <div className="avatar-normal">
                  <img src={Avatar} alt="avatar"/>
              </div>

              <div className="user-name1">
                <p>{ usuario.result ? usuario.result[0].nombre + " " + usuario.result[0].apellido : "Administrador"}</p> 
              </div>
          </div>

            {/**Container tabs  */}
            <ContainerTabsProfesores/>
        </div>
      </>
    );
}
 
export default TabsProfesor;