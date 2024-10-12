import { useLoaderData } from "react-router-dom";
import { Movie } from "../interfaces/MovieInterface";
import { useEffect, useState } from "react";
import SearchResults from "../components/SearchResults";
import MoviesSection from "../components/MoviesSection";
import Search from "../components/Search";

const TVSeries = () => {
  const data = useLoaderData() as Movie[];
  const [series, setSeries] = useState<Movie[]>();
  const [filteredData, setFilteredData] = useState<Movie[]>();
  const [query, setQuery] = useState<string>("");

  const filterData = (query: string) => {
    if (series) {
      setFilteredData(
        series.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    setSeries(data.filter((item) => item.category === "TV Series"));
  }, []);

  return (
    <div>
      <Search
        placeholder="Search for movies or TV series"
        filterFunction={filterData}
        setQuery={setQuery}
      />
      {query && <SearchResults data={filteredData} query={query} />}
      {!query && <MoviesSection data={series} title="TV Series" />}
    </div>
  );
};

export default TVSeries;
