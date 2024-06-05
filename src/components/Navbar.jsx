import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import {useUserContext} from './AuthContext.jsx'


export default function Navbar() {
    const {isConnected, tokenDisconnect} = useUserContext();
    
    return (
        <div className='navbar'>
            <Link to='/'> Home </Link>
            <Link to='/cart'> Cart </Link>
            {isConnected?
            <Link onClick={() =>tokenDisconnect()}> Log out </Link>
            :
            <Link to='/login'> Login </Link>
            }
            
            
            
            
            <p> { isConnected?" connected ": " not connected "} </p>
        </div>
    )
}
