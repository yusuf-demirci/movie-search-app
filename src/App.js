import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import { MovieProvider } from "./context/MovieContext";

function App() {
    return (
        <MovieProvider>
            <div className="container">
                <main>
                    <Header />
                    <SearchBox />
                    <Results />
                </main>
            </div>
        </MovieProvider>
    );
}

export default App;
