import { Link } from "react-router-dom";
import { Movie } from "../interfaces/MovieInterface";

const MovieCard = ({ data }: { data: Movie }) => {
  return (
    <article className="movie-card">
      <div className="movie-card__image-wrapper">
        <picture className="movie-card__image">
          <source
            srcSet={data.thumbnail.regular.small}
            media="(max-width: 30em)"
          />
          <source
            srcSet={data.thumbnail.regular.medium}
            media="(max-width: 75em)"
          />
          <img src={data.thumbnail.regular.large} alt={data.title} />
        </picture>
        <button
          className={`movie-card__bookmark ${data.isBookmarked ? "true" : ""}`}
        ></button>
        <Link
          to={"#"}
          className={`movie-card__play ${data.isBookmarked ? "true" : ""}`}
        >
          Play
        </Link>
      </div>
      <div className="movie-card__header">
        <div className="movie-card__date">{data.year}</div>
        <div className={"movie-card__category" + " " + data.category}>
          {data.category}
        </div>
        <div className="movie-card__rating">{data.rating}</div>
      </div>
      <h3 className="movie-card__title">{data.title}</h3>
    </article>
  );
};

export default MovieCard;
