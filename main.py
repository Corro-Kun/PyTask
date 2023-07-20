from fastapi import FastAPI
from routers.task import task
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get('/')
def welcom():
    return {'message': 'hello world'}

app.include_router(task)