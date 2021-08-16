import React, { useState } from "react";
import "./Tabs.css";
import ContainerTabs from "./tabs/containerTabs";
import Avatar from "../../assets/avatar.png";


const Tabs = () => {


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

        {/*abajo container */}
        <ContainerTabs/>
      </div>
    </>
  );
}
 
export default Tabs;