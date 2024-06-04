import React from 'react'
import {useUserContext} from './AuthContext.jsx'

export default function Testing() {
    const {token} = useUserContext();
    const {tokenDisconnect} = useUserContext();
  
  return (
    <>
    <div> test: {token}</div>
    <button onClick={() => tokenDisconnect()}>disconnect</button>
    </>
  )
}

