import React,{useEffect, useState} from "react";
import Card from "./Tarj";
import { GetTask } from "../api";

function List(){

    const [Content, setContent] = useState([]);

    useEffect(() => {
        Get();
    },[])

    async function Get(){
        const result = await GetTask();
        setContent(result);
    }

    return(
        <div className="flex py-5 gap-10 flex-wrap items-center">
            {
                Content.map((Content, i)=>(
                    <Card key={i} title={Content.title} descripcion={Content.descripcion} />
                ))
            }
        </div>
    )
}

export default List