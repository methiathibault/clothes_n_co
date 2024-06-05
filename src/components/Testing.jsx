import React, { useEffect } from 'react'
import {useUserContext} from './AuthContext.jsx'

import { useNavigate } from "react-router-dom"

export default function Testing() {
    const {token} = useUserContext();
    const {tokenDisconnect} = useUserContext();
    const {verifyToken} = useUserContext();

    {verifyToken();}

    const navigate = useNavigate();
    const redirectTest = async ()=>{
      console.log('redirection')
      navigate("/login")
      
    }
  
  return (
    <>
    <div> test: {token}</div>
    <button onClick={() => tokenDisconnect()}>disconnect</button>
    <button onClick={() => redirectTest()}>redirect</button>
    </>
  )
}

