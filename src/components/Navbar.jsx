import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { useUserContext } from './AuthContext.jsx'


export default function Navbar() {
    const { isConnected, tokenDisconnect } = useUserContext();

    return (
        <div className='navbar'>
            <div>
                <Link to='/'> Home </Link>
                <Link to='/cart'> Cart </Link>
            </div>
            <div className='status-container'>
                {isConnected ?
                    <>
                        <Link onClick={() => tokenDisconnect()}> Log out </Link>
                        <p className='connected'> Connected </p>
                    </>
                    :
                    <>
                        <Link to='/login'> Login </Link>
                        <p className='disconnected'> Disconnected </p>
                    </>
                }
            </div>
        </div>
    )
}
