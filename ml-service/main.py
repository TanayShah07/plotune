from fastapi import FastAPI
from pydantic import BaseModel

from services.movie_service import recommend_movies

app = FastAPI()

class SearchRequest(BaseModel):
    query: str
    type: str

@app.post("/recommend")
def recommend(data: SearchRequest):

    results = recommend_movies(data.query)

    return {
        "results": results
    }