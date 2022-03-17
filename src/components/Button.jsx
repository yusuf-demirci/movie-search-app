import { useContext } from "react";
import MovieContext from "../context/MovieContext";

function Button({ className, text }) {
    const { handleSearch, handleClear } = useContext(MovieContext);

    return (
        <button
            onClick={text === "search" ? handleSearch : handleClear}
            type="button"
            className={className}
        >
            {text}
        </button>
    );
}

export default Button;
