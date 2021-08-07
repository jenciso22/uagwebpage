import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
// import * as IoIcons from "react-icons/io5";


export const SidebarDataAlumno = [


    {
        title: 'Mi Perfil',
        path: '/perfil-alumno',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Mi Proyecto',
        path: '/proyecto-alumno',
        icon: <BsIcons.BsArchiveFill />,
        cName: 'nav-text'
    },
    {
        title: 'Proyectos Generales',
        path: '/proyectosgenerales-alumno',
        icon: <BsIcons.BsArchiveFill />,
        cName: 'nav-text'
    },
    {
        title: 'Perfiles Maestros',
        path: '/maestros',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Mis Solicitudes',
        path: '/solicitudes-alumno',
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

