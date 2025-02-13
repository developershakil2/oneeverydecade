'use client'
import React, {createContext, useState, useEffect, ReactNode} from 'react'
import { ConType } from './UtilitiesType'

export const API = createContext<ConType | undefined>(undefined)

interface ContextProps{
    children:ReactNode
}

// https://rpc.ankr.com/bsc

const ContextComponent = ({children}:ContextProps)=>{

    const [openNav, setOpenNav] = useState<any>('-9999%')
   
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const [resMessage, setResMessage] = useState<any>('')
    





    return(

         <API.Provider value={{openNav, setOpenNav,
            isLoad, setIsLoad,
            resMessage,
            setResMessage,
           

         }}>
            {children}
         </API.Provider>
    )


}


export default ContextComponent;
