import React, { useContext, useState, createContext } from 'react';

export const userContext = createContext();

export function UserProvider({children}){
    const [token, setToken] =  useState("");

    const tokenSetter = (new_token) =>{
        setToken(new_token);
        console.log(new_token)
        console.log(token)
    }

    const verifyToken =() =>{
        const storedToken = localStorage.getItem("token");
        if (token == "" && storedToken != null ){
            setToken(storedToken)
        }

        if(token != "" && storedToken == null){
            tokenDisconnect();
        }
    }

    const tokenDisconnect = () =>{
        localStorage.removeItem("token");
        console.log("disconection")
        setToken("")
    }

    const data = {token, tokenSetter, tokenDisconnect, verifyToken};
    return <userContext.Provider value={data}>{children}</userContext.Provider>
  }
  export const useUserContext = () => useContext(userContext)
