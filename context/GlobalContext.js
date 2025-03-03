'use client'
import { createContext,useContext,useEffect,useState } from "react"
import { useSession } from "next-auth/react";
import getUnreadMessageCount from "@/app/actions/getUnreadMessageCount";

const GlobalContext = createContext();

// create provider
export function GlobalProvider({children}){
    const [unreadCount,setUnReadCount] =useState(0)
    const {data:session} = useSession()

    useEffect(()=>{
        if(session && session.user){
            getUnreadMessageCount().then((res)=>{
                if(res.count) setUnReadCount(res.count)
            })
        }
    },[session,getUnreadMessageCount])
    return (
        <GlobalContext.Provider
        value={{
        unreadCount,
        setUnReadCount
        }} 
        >
         {children}
        </GlobalContext.Provider>
    )
}

// custom hook
export function useGlobalContext(){
    return useContext(GlobalContext)
}