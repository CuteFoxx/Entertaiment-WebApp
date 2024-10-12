import { useLoaderData } from "react-router-dom";
import { Movie } from "../interfaces/MovieInterface";
import { useEffect, useState } from "react";
import SearchResults from "../components/SearchResults";
import Search from "../components/Search";
import MoviesSection from "../components/MoviesSection";

const Movies = () => {
  const data = useLoaderData() as Movie[];
  const [movies, setMovies] = useState<Movie[]>();
  const [filteredData, setFilteredData] = useState<Movie[]>();
  const [query, setQuery] = useState<string>("");

  const filterData = (query: string) => {
    if (movies) {
      setFilteredData(
        movies.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    setMovies(data.filter((item) => item.category === "Movie"));
  }, []);

  return (
    <div>
      <Search
        placeholder="Search for movies or TV series"
        filterFunction={filterData}
        setQuery={setQuery}
      />
      {query && <SearchResults data={filteredData} query={query} />}
      {!query && <MoviesSection data={movies} title="Movies" />}
    </div>
  );
};

export default Movies;
