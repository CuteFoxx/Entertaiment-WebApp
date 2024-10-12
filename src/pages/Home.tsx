import type { Movie } from "../interfaces/MovieInterface";
import { useLoaderData } from "react-router-dom";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import SearchResults from "../components/SearchResults";
import MoviesSection from "../components/MoviesSection";
import Trending from "../components/Trending";

const Home = () => {
  const data = useLoaderData() as Movie[];
  const [filteredData, setFilteredData] = useState<Movie[]>();
  const [query, setQuery] = useState<string>("");
  const [trending, setTrending] = useState<Movie[]>();

  const filterData = (query: string) => {
    setFilteredData(
      data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setTrending(data.filter((item) => item.isTrending === true));
  }, []);

  return (
    <div>
      <Search
        placeholder="Search for movies or TV series"
        filterFunction={filterData}
        setQuery={setQuery}
      />
      {query && <SearchResults data={filteredData} query={query} />}
      {!query && <Trending trending={trending} />}
      {!query && <MoviesSection data={data} title="Recommended for you" />}
    </div>
  );
};

export default Home;
