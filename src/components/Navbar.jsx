import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'> Home </Link>
            <Link to='/cart'> Cart </Link>
            <Link to='/login'> Login </Link>
            <Link to='/testing'> Testing </Link>
            <Link to='/disconnect'> disconnect </Link>
            <Link to='/category/jewelery'> category </Link>
        </div>
    )
}
