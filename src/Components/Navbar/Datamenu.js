import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
// import * as IoIcons from "react-icons/io5";
import CerrarSesiones from './CerrarSesiones';


export const Datamenu = [
    {
        title: 'Perfil',
        path: '/perfil',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-textdos'
    },
    {
        title: "cerrar sesion",
        path: '/',
        icon: <RiIcons.RiLogoutBoxRLine />,
        cName: 'nav-textdos'
    }

]


//<CerrarSesiones/>



