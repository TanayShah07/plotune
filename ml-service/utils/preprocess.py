import pandas as pd

def load_movies():
    df = pd.read_csv("data/tmdb_5000_movies.csv")

    df = df[
        [
            "title",
            "overview",
            "vote_average",
            "release_date"
        ]
    ]

    df.dropna(inplace=True)

    return df