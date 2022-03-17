import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";

function SearchBox() {
    const { movieName, setMovieName, setSearchName } = useContext(MovieContext);

    return (
        <section className="search">
            <h4 className="search--title">Movie title</h4>
            <div className="search--searchbar">
                <SearchIcon className="search--icon" />
                <input
                    type="text"
                    className="search--input"
                    placeholder="search"
                    onChange={(e) => setMovieName(e.target.value)}
                    value={movieName}
                />
            </div>
            <div className="search--buttons">
                <Button className="search--buttons__clear" text="clear" />
                <Button className="search--buttons__search" text="search" />
            </div>
        </section>
    );
}

export default SearchBox;
