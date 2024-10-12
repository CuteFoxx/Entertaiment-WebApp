import { Movie } from "../interfaces/MovieInterface";
import MovieCard from "./MovieCard";

const MoviesSection = ({
  data,
  title,
}: {
  data: Movie[] | undefined;
  title: string;
}) => {
  return (
    <section className="movies__section">
      <h2>{title}</h2>
      <div className="movies__wrapper">
        {data?.map((item: Movie) => {
          return <MovieCard data={item} key={item.title} />;
        })}
      </div>
    </section>
  );
};

export default MoviesSection;
