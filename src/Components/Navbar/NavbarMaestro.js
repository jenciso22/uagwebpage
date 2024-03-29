import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import{SidebarData} from './SidebarData';
import './Navbar.css'
// import { IconContext } from 'react-icons';
import logouag from './logoMini.png'
import {Datamenu} from './Datamenu'

const NavbarAlumno = () => {

    const [sidebar, setSidebar] = useState(false);
    const [sidemenu, setSidemenu] = useState(false);


    const showSidebar = () => setSidebar(!sidebar)
    const showSidemenu = () => setSidemenu(!sidemenu);

    return (
        <>
            <header className="header">
                    <div className="logo-tggle">
                        <img src={logouag} alt='LogoUag' className='localuag'/>
                        <Link to="#" className="menu-bars1">
                            { sidebar ? <FaIcons.FaRegWindowClose onClick={showSidebar}/> : <FaIcons.FaBars onClick={showSidebar}/>}
                        </Link>
                    </div>

                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            { SidebarData.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName}>
                                        <i>{item.icon}</i>
                                        <Link to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                    )
                                }) 
                            }
                        </ul>
                    </nav>
                    
                    <div className={sidemenu ? 'icon-users active' : 'icon-users'}>
                        <Link to="#" className="menu-bars3">
                            <BiIcons.BiUser onClick={showSidemenu}/>
                        </Link>
                        { 
                            <div className='drawer-dos'>
                                <nav className={sidemenu ? 'nav-menudos active' : 'nav-menudos'}>
                                    <ul className='nav-menu-itemsdos' onClick={showSidemenu}>
                                    {Datamenu.map((item, index) => {
                                            return(
                                                <li key={index} className={item.cName}>
                                                    <i>{item.icon}</i>
                                                    <Link to={ item.title === "Perfil" ? "/perfil" : item.path}>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        }
                    </div>

            </header>
        </>
    );
}
 
export default NavbarAlumno;