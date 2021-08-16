import React, { useState } from "react";
import "./Tabs.css";
import Avatar from "../../assets/avatar.png";
import ContainerTabsProfesores from "./tabs/containerTabsProfesores";

const TabsProfesor = () => {
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

            {/**Container tabs  */}
            <ContainerTabsProfesores/>
        </div>
      </>
    );
}
 
export default TabsProfesor;