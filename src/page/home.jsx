import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const Navegate = useNavigate();

    return(
        <div className="flex justify-center h-screen items-center">
            <div className="flex items-center flex-col">
                <h2 className=" font-sans text-cyan-100 text-3xl" >welcome to my homework app</h2>
                <div className="m-5">
                    <button className=" bg-sky-800 px-5 py-2 rounded-xl text-gray-50" onClick={() => Navegate('/tasks')}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Home