import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { useUserContext } from './AuthContext.jsx'
import '../styles/Login.css'

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [connectionStatus, setConnectionStatus] = useState();
    const [myToken, setToken] = useState('');
    const { tokenSetter, token } = useUserContext();

    const connexion = () => {
        axios.post('https://fakestoreapi.com/auth/login', {
            username: username,
            password: password
        })
            .then(function (response) {
                setConnectionStatus("you are connected")
                setToken(response.data.token)
            })
            .catch(function (error) {
                setConnectionStatus("error password or username")
                console.log(error);
            });
    }

    useEffect(() => {
        if (myToken) {
            tokenSetter(myToken)
        }
    }, [myToken])

    if (token === "") {
        return (
            <div className='login'>
                <div className='login-card'>
                    <h1>Login</h1>
                    <div className='username'>
                        <p>Username :</p>
                        <input type='text' onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='password'>
                        <p>Password :</p>
                        <input type='password' onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='submit'><button onClick={connexion}>connect</button></div>
                    <div className='response'> {connectionStatus}</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='already-connected'>
                <h1>already connected</h1>
            </div>
        )
    }

}
