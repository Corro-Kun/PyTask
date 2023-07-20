const API = 'http://localhost:8000'

export async function Create(data){
    const result = await fetch(API+'/api/tasks', {
        method:'POST', body: JSON.stringify(data), headers: {'Content-type': 'application/json'}
    })
    return result
}

export async function Update(data, id){
    const result = await fetch(API+'/api/tasks/'+id,{
        method:'PUT', body: JSON.stringify(data), headers: {'Content-type': 'application/json'}
    });
    return await result.json();
}

export async function Delete(id){
    const result = await fetch(API+'/api/tasks/'+id,{
        method:'DELETE'
    })
    return await result.json();
}

export async function GetT(id){
    const result = await fetch(API+'/api/tasks/'+id);
    return await result.json();
}

export async function GetTask(){
    const result = await fetch(API+'/api/tasks')
    return await result.json();
}
