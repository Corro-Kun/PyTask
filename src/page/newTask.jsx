import React,{useState} from "react";
import {Create} from '../api.js'

function NewTask(){

    const [Content ,setContent] = useState({
        title: "",
        descripcion: ""
    });

    function OnChangerContent({target: {name, value}}){
        setContent({...Content, [name] : value})
    }

    async function Handle(e){
        e.preventDefault();
        console.log(Content)
        await Create(Content);
    }

    return(
        <div className="flex items-center justify-center h-screen" >
            <form className=" bg-sky-900 h-80 w-80 p-5 text-slate-50 rounded-xl border-solid border" onSubmit={Handle}>
                <h2 className=" my-2" >Title</h2>
                <input 
                type="text"
                className=" w-full p-1 text-black outline-none rounded-sm"
                name="title"
                onChange={OnChangerContent} />
                <h2 className=" my-2" >Description</h2>
                <textarea 
                name="descripcion" 
                className=" w-full resize-none p-1 text-black outline-none rounded-sm h-24"
                onChange={OnChangerContent} 
                ></textarea>
                <div className="flex justify-center my-4 bg-sky-950 p-2 rounded-md cursor-pointer" >
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default NewTask