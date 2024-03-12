import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
        <NavLink to='/' style={{marginLeft: '50px'}} className='nav-item'>
            Home
        </NavLink>
        <NavLink to='/projects' className='nav-item'>
            Projects
        </NavLink>
        <a className='nav-item' href='/Resume.pdf'>
            Resume
        </a>
    </nav>
  )
}
