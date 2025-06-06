import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg' // Assuming you have a logo image in this path

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
