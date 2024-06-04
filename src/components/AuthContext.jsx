import React, { useContext, useState, createContext } from 'react';

export const userContext = createContext();

export function UserProvider({children}){
    const [token, setToken] =  useState("");

    const tokenSetter = (new_token) =>{
        
        setToken(new_token);
        console.log(new_token)
        console.log(token)
    }

    const tokenDisconnect = () =>{
        console.log("disconection")
        setToken("")
    }

    const data = {token, tokenSetter, tokenDisconnect};
    return <userContext.Provider value={data}>{children}</userContext.Provider>
  }
  export const useUserContext = () => useContext(userContext)
