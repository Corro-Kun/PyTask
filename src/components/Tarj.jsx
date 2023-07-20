import React from "react";
import {useNavigate} from "react-router-dom";
import { Delete, Update } from "../api";
import { GoCheck, GoX } from "react-icons/go";

function Card({title, descripcion, id, complet}){

    const Navegate = useNavigate();

    async function deleteTask(){
        await Delete(id);
        Navegate('/redirecting');
    }

    async function True(){
        await Update({completed: true},id);
        Navegate('/redirecting');
    }

    async function False(){
        await Update({completed: false},id);
        Navegate('/redirecting');
    }

    return(
        <div className="bg-sky-700 w-80 rounded-sm p-2" >
            <div className="flex justify-between" >  
                <h2 className=" text-white text-2xl break-words" >{title}</h2>
                {
                    !complet ? <button className=" text-green-500 text-3xl" onClick={()=> True()} ><GoCheck /></button> :
                    <button className=" text-red-600 text-3xl" onClick={()=> False()} ><GoX /></button>
                }
            </div>
            <p className=" break-words">{descripcion}</p>
            <div className="flex justify-between" >
                <button className=" bg-green-600 p-1 text-white rounded-sm" onClick={()=> Navegate('/task/'+id)} >Update</button>
                <button className=" bg-red-700 p-1 text-white rounded-sm" onClick={()=> deleteTask()} >Delete</button>
            </div>
        </div>
    )
}

export default Card