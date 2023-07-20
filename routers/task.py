from fastapi import APIRouter, HTTPException
from database import get_all_task, create_task, get_one_task_title, get_one_task_id, delete_task, update_task
from models import Task, UpdataTask

task = APIRouter()

@task.get('/api/tasks')
async def getTasks():
    task = await get_all_task()
    return task

@task.get('/api/tasks/{id}', response_model=Task)
async def getTask(id: str):
    result = await get_one_task_id(id)
    if result:
        return result

    raise HTTPException(404, f"Task id {id} not found")

@task.post('/api/tasks', response_model=Task)
async def postTask(task: Task):
    consul = await get_one_task_title(task.title)
    if consul:
        raise HTTPException(409, 'Task already exists')

    result = await create_task(task.dict())
    if result:
        return result
    raise HTTPException(400,'Something went wrong')

@task.put('/api/tasks/{id}', response_model=Task)
async def putTask(id: str, task: UpdataTask):
    result = await update_task(id, task)
    if result: 
        return result
    raise HTTPException(404, f"Task id {id} not found")

@task.delete('/api/tasks/{id}')
async def deleteTask(id: str):
    response = await delete_task(id)
    if response:
        return 'Successfully delete task'

    raise HTTPException(404, f"Task id {id} not found")