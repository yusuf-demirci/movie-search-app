import { createContext, useState } from "react";

const MovieContext = createContext();
const API_KEY = process.env.REACT_APP_API_KEY;
const MOVIE_APP_URL = process.env.REACT_APP_BASE_URL;

export const MovieProvider = ({ children }) => {
    const [movieName, setMovieName] = useState("");
    const [searchName, setSearchName] = useState("");
    const [moviesLoaded, setMoviesLoaded] = useState(false);
    const [movieList, setMovieList] = useState([]);

    const handleClear = () => {
        setMovieName("")
        setMoviesLoaded(false);
        setMovieList([]);
    };

    const handleSearch = async () => {
        if (movieName === "") {
            alert("Please enter a movie name");
            return;
        }
        const response = await fetch(
            `${MOVIE_APP_URL}?apikey=${API_KEY}&s=${movieName}`
        );
        const data = await response.json();

        try {
            if (data.Error) {
                throw new Error(data.Error);
            }

            setSearchName(movieName)
            setMovieList(data.Search);
            setMoviesLoaded(true);
    
        } catch (error) {
            alert(error);
        }
        setMovieName("");
    };

    return (
        <MovieContext.Provider
            value={{
                movieName,
                searchName,
                moviesLoaded,
                movieList,
                setMovieName,
                setSearchName,
                handleSearch,
                handleClear,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContext;
