import { Movie } from "../interfaces/MovieInterface";
import MovieCard from "./MovieCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MoviesSection = ({
  data,
  title,
}: {
  data: Movie[] | undefined;
  title: string;
}) => {
  const container = useRef<any>();

  useGSAP(
    () => {
      gsap.fromTo(
        ".movie-card",
        { opacity: 0, xPercent: -15 },
        { opacity: 1, xPercent: 0, duration: 1, stagger: 0.09 }
      );
    },
    { scope: container }
  );

  return (
    <section className="movies__section" ref={container}>
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
