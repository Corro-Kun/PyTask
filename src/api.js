const API = 'http://localhost:8000'

export async function Create(data){
    const result = await fetch(API+'/api/tasks', {
        method:'POST', body: JSON.stringify(data), headers: {'Content-type': 'application/json'}
    })
    return result
}

export async function GetTask(){
    const result = await fetch(API+'/api/tasks')
    return await result.json();
}