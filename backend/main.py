from fastapi import FastAPI
import uvicorn

app = FastAPI()

# list of items on the start page
allowed_input = ['roasted']


@app.get("/")
def on_start():
    return allowed_input


@app.get("/input/{item}")
def read_item(input: str):
    # return dictionary/list of answers
    return f"{input} processed"


if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
