from models.embedding_model import model
from utils.preprocess import load_movies

from sklearn.metrics.pairwise import cosine_similarity

movies_df = load_movies()

movie_embeddings = model.encode(
    movies_df["overview"].tolist(),
    show_progress_bar=True
)

def recommend_movies(query):

    query_embedding = model.encode([query])

    similarities = cosine_similarity(
        query_embedding,
        movie_embeddings
    )[0]

    top_indices = similarities.argsort()[-10:][::-1]

    results = []

    for idx in top_indices:
        movie = movies_df.iloc[idx]

        results.append({
            "title": movie["title"],
            "description": movie["overview"],
            "rating": movie["vote_average"],
            "release_date": movie["release_date"],
        })

    return results