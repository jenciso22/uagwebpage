import React, { useState } from "react";
import "./Tabs.css";
//import { makeStyles } from "@material-ui/core/styles";
//import Avatar from "@material-ui/core/Avatar";
import ContainerTabs from "./tabs/containerTabs";
import Avatar from "../../assets/avatar.png";
/*
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    position: "flex",

    "& > *": {
      margin: theme.spacing(25),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));*/

/*
<Avatar
alt="Jose Enciso"
className={classes.large}
src="/static/images/avatar/1.jpg"
/>*/

const Tabs = () => {

  //const classes = useStyles();

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