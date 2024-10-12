import { useEffect, useState } from "react";
import MoviesSection from "../components/MoviesSection";
import { useLoaderData } from "react-router-dom";
import { Movie } from "../interfaces/MovieInterface";

const Bookmarked = () => {
  const data = useLoaderData() as Movie[];
  const [bookmarkedSeries, setBookmarkedSeries] = useState<Movie[]>();
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>();

  useEffect(() => {
    setBookmarkedSeries(
      data
        .filter((item) => item.category === "TV Series")
        .filter((item) => item.isBookmarked === true)
    );
    setBookmarkedMovies(
      data
        .filter((item) => item.category === "Movie")
        .filter((item) => item.isBookmarked === true)
    );
  }, []);

  return (
    <div className="bookmarked">
      {bookmarkedSeries && (
        <MoviesSection data={bookmarkedSeries} title="Bookmarked TV Series" />
      )}
      {bookmarkedMovies && (
        <MoviesSection data={bookmarkedMovies} title="Bookmarked Movies" />
      )}
    </div>
  );
};

export default Bookmarked;
