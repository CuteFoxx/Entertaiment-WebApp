import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../interfaces/MovieInterface";
import MovieCard from "./MovieCard";
import "swiper/css";

const Trending = ({ trending }: { trending: Movie[] | undefined }) => {
  return (
    <section className="trending">
      <h2>Trending</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={40}>
        {trending?.map((item: Movie) => {
          return (
            <SwiperSlide key={item.title}>
              <MovieCard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Trending;
