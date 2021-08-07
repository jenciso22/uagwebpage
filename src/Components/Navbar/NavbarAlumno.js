import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import{SidebarDataAlumno} from './SidebarDataAlumno';
import './Navbar.css'
import { IconContext } from 'react-icons';
import logouag from './logoMini.png'
import {Datamenu} from './Datamenu'


function NavbarAlumno () {

    const [sidebar, setSidebar] = useState(false);
    const [sidemenu, setSidemenu] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    const showSidemenu = () => setSidemenu(!sidemenu);


    return (
        <>
        <IconContext.Provider value={{
            color: '#ffff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars1">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <img src={logouag} alt='LogoUag' className='localuag'/>
            </div>
            <Link to="#" className="menu-bars3">
                    <BiIcons.BiUser onClick={showSidemenu}/>
                </Link>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars2'>
                        <img src={logouag} alt='LogoUag' className='localuagnew'/>
                            {/* <AiIcons.AiOutlineClose /> */}
                        </Link>
                    </li>
                    {SidebarDataAlumno.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        

         { <div className='drawer-dos'>

            <nav className={sidemenu ? 'nav-menudos active' : 'nav-menudos'}>
                <ul className='nav-menu-itemsdos' onClick={showSidemenu}>
                    <li className="navbar-toggledos">
                        <Link to="#" className='menu-barsdos'>
                        </Link>
                    </li>
                    {Datamenu.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                    
                                </Link>
                            </li>
                                                 
                            
                        )
                    })}
                </ul>
            </nav>
                </div>}

                    

            </IconContext.Provider>
        </>
    )
}

export default NavbarAlumno



