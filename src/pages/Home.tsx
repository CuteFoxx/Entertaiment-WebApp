import type { Movie } from "../interfaces/MovieInterface";
import { useLoaderData } from "react-router-dom";
import Search from "../components/Search";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const data = useLoaderData() as Movie[];
  const [filteredData, setFilteredData] = useState<Movie[]>();

  const filterData = (query: string) => {
    setFilteredData(
      data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Search
        placeholder="Search for movies or TV series"
        filterFunction={filterData}
      />
      <section className="movies__section">
        <h2>Recommended for you</h2>
        <div className="movies__wrapper">
          {data?.map((item: Movie) => {
            return <MovieCard data={item} key={item.title} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
