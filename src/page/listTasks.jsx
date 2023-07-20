import React from "react";
import {useNavigate} from "react-router-dom";
import List from "../components/List";

function ListTasks(){

    const Navegate = useNavigate();

    return(
        <div className=" p-10" >
            <header className="flex justify-between content-center items-center " >
                <div>
                    <input type="text" className="p-1 outline-none rounded-md" />
                    <button className=" bg-sky-700 mx-5 px-3 py-1 rounded-md text-zinc-100" >Search</button>
                </div>
                <div>
                    <button className=" bg-green-700 px-5 py-2 rounded-md text-white" onClick={() => Navegate('/task/new')} >New</button>
                </div>
            </header>
            <List />
        </div>
    )
}

export default ListTasks