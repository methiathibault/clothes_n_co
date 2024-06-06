import React, { useContext, useState, createContext } from 'react';
import { useNavigate } from "react-router-dom"
export const userContext = createContext();


export function UserProvider({children}){
    const [token, setToken] =  useState("");
    const [isConnected, setIsConnected] =  useState(false)
    const navigate = useNavigate();

    const tokenSetter = (new_token) =>{
        localStorage.setItem("token", new_token);
        setToken(new_token);
        setIsConnected(true)
        navigate("/")
    }

    const verifyToken =() =>{
        const storedToken = localStorage.getItem("token");
        if (token == "" && storedToken != null ){
            setToken(storedToken)
            setIsConnected(true)
        }

        if(token != "" && storedToken == null){
            tokenDisconnect();
        }
    }

    const tokenDisconnect = () =>{
        localStorage.removeItem("token");
        setToken("")
        setIsConnected(false);
    }

    const data = {token, tokenSetter, tokenDisconnect, verifyToken, isConnected};
    return <userContext.Provider value={data}>{children}</userContext.Provider>
  }
  export const useUserContext = () => useContext(userContext)
