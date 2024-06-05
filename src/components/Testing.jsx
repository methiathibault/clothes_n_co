import React, { useEffect } from 'react'
import {useUserContext} from './AuthContext.jsx'

export default function Testing() {
    const {token} = useUserContext();
    const {tokenDisconnect} = useUserContext();
    const {verifyToken} = useUserContext();

    {verifyToken();}
  
  return (
    <>
    <div> test: {token}</div>
    <button onClick={() => tokenDisconnect()}>disconnect</button>
    </>
  )
}

