import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const navigationData = [
    {
      "id": 1,
      "name": "Home",
      "path": "/"
    },
    {
      "id": 2,
      "name": "About",
      "path": "/about"
    },
    {
      "id": 3,
      "name": "Services",
      "path": "/services"
    },
    {
      "id": 4,
      "name": "Portfolio",
      "path": "/portfolio"
    },
    {
      "id": 5,
      "name": "Contact",
      "path": "/contact"
    }
  ]
  

const Nav = () => {

    const [open, setOpen ] = useState(false)
    const links = navigationData.map(route => 
            <li key={route.id}>
                <NavLink to={route.path}>{route.name}</NavLink>
            </li>)
    
    return (
       <nav className='flex fixed w-full top-0 z-10 justify-between items-center md:px-10 p-4 bg-lime-800 text-white'>
        <span className='flex'>
        <Menu onClick={() => setOpen(!open)} className='md:hidden'></Menu>
        <ol className={`md:hidden absolute z-10 ${open ? 'left-0' : '-left-20' } duration-400 text-black mt-11 p-2 space-y-2  bg-lime-100`}>
            {links}
        </ol>
        <h1 className='ml-4 font-bold'>AFROJA</h1>
        </span>
        
        <ul className='hidden md:flex gap-5 justify-center'>
            {
                links
            }
        </ul>

        <button className='btn h-8'>Sign In</button>

        </nav>
    );
};

export default Nav;