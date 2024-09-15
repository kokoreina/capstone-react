import { useEffect } from "react"

export const useTitle=(name)=>{
    useEffect(()=>{
        document.title=name;
    },[name])   
}