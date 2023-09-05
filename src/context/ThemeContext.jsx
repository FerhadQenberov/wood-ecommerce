import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext=createContext()
export const ThemeContext=({children})=>{
    const [darkMode,setDarkMode]=useState(
        localStorage.getItem("DarkMode") ? JSON.parse(localStorage.getItem("DarkMode")) :false
    )
const toggle=()=>{
    setDarkMode(!darkMode)
}
useEffect(()=>{
    localStorage.setItem("DarkMode",JSON.stringify(darkMode))
},[darkMode])
    return(
        <GlobalContext.Provider value={{darkMode,toggle}}>
            {children}
        </GlobalContext.Provider>
    )
}