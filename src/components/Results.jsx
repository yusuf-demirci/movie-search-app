import MovieContext from "../context/MovieContext";
import { useContext } from "react";
import { v4 as uuid } from "uuid";

function Results() {
    const { searchName, moviesLoaded, movieList } = useContext(MovieContext);

    return (
        <div className="results">
            {moviesLoaded ? (
                <>
                    <h4>Results for "{searchName}"</h4>
                    <p className="results--definition">
                        click on a movie title to learn more about it
                    </p>
                    <div className="results--movies">
                        {movieList.map((movie) => {
                            const unique_id = uuid();
                            return (
                                <p
                                    className="results--movies__item"
                                    key={unique_id}
                                >
                                    {movie.Title} ({movie.Year})
                                </p>
                            );
                        })}
                    </div>
                </>
            ) : (
                <h4>Search results will appear here</h4>
            )}
        </div>
    );
}

export default Results;
