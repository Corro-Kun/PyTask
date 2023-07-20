import React,{useState, useEffect} from "react";
import {GetT, Update} from '../api.js'
import {useParams, useNavigate} from 'react-router-dom'

function EditTask(){

    const Navegate = useNavigate();

    const {id} = useParams();

    const [Content ,setContent] = useState({});

    const [Data, setData] = useState({
        title: '',
        descripcion: ''
    });

    useEffect(() =>{
        Get();
    },[]);

    function OnChangerContent({target: {name, value}}){
        setContent({...Content, [name] : value})
    }

    async function Get(){
        const result = await GetT(id);
        setData({
            title: result.title,
            descripcion: result.descripcion
        })
    }

    async function Handle(e){
        e.preventDefault();
        console.log(Content)
        const result = await Update(Content, id);
        Navegate('/tasks');
    }

    return(
        <div className="flex items-center justify-center h-screen" >
            <form className=" bg-sky-900 h-80 w-80 p-5 text-slate-50 rounded-xl border-solid border" onSubmit={Handle}>
                <h2 className=" my-2" >Title</h2>
                <input 
                type="text"
                className=" w-full p-1 text-black outline-none rounded-sm"
                name="title"
                placeholder={Data.title}
                onChange={OnChangerContent}
                autoFocus />
                <h2 className=" my-2" >Description</h2>
                <textarea 
                name="descripcion" 
                className=" w-full resize-none p-1 text-black outline-none rounded-sm h-24"
                onChange={OnChangerContent}
                placeholder={Data.descripcion}
                ></textarea>
                <div className="flex justify-center my-4 bg-sky-950 p-2 rounded-md cursor-pointer" >
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditTask