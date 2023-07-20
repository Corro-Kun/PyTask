import React from "react";

function Card({title, descripcion}){
    return(
        <div className="bg-sky-700 w-72 rounded-sm p-2" >
            <h2 className=" text-white text-2xl break-words" >{title}</h2>
            <p className=" break-words">{descripcion}</p>
            <div className="flex justify-between" >
                <button className=" bg-green-600 p-1 text-white rounded-sm" >Update</button>
                <button className=" bg-red-700 p-1 text-white rounded-sm" >Delete</button>
            </div>
        </div>
    )
}

export default Card