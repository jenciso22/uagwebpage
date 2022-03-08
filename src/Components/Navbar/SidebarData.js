import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
// import * as IoIcons from "react-icons/io5";


export const SidebarData = [
    {
        title: 'Mi Perfil',
        path: '/perfil',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Mis Proyectos',
        path: '/proyectos',
        icon: <BsIcons.BsArchiveFill />,
        cName: 'nav-text'
    },
    {
        title: 'Proyectos Generales',
        path: '/proyectosgenerales',
        icon: <BsIcons.BsArchiveFill />,
        cName: 'nav-text'
    },
    {
        title: 'Perfiles Alumnos',
        path: '/alumnos',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Solicitudes Proyectos',
        path: '/solicitudes',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    }

    // {
    //     title: 'Dashboard',
    //     path: '/dashboard',
    //     icon: <IoIcons.IoSettings />,
    //     cName: 'nav-text'
    // },
]