import { useEffect, useRef } from "react"
import { useStateContext } from "../../contexts/state-context";
import './toast.css'
export function Toast({msg}){
    const{dispatch}=useStateContext();
    useEffect(()=>{
        let timeOut=setTimeout(()=>{
         dispatch({type:'removeToast'})
        },1000)
        return()=>{
            clearTimeout(timeOut)
        } 
    },[])
    return (
        <div className='toast'>
            <h5>{msg}</h5>
        </div>
    )
}