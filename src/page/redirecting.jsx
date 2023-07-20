import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Redirecting() {

    const Navegate = useNavigate();

    useEffect(() => {
        Navegate('/tasks');
    },[])

    return <h2 className=" text-white text-3xl" >redirecting...</h2> 
}

export default Redirecting