import type { Movie } from "../interfaces/MovieInterface";
import MovieCard from "./MovieCard";

const SearchResults = ({
  data,
  query,
}: {
  data: Movie[] | undefined;
  query: string;
}) => {
  if (data) {
    return (
      <>
        <h2>
          Found {data?.length} results for {query}
          <div className="movies__wrapper">
            {data?.map((item: Movie) => {
              return <MovieCard data={item} key={item.title} />;
            })}
          </div>
        </h2>
      </>
    );
  }
};

export default SearchResults;
