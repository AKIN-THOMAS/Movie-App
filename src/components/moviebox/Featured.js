import React from "react";
import MovieCard from "./MovieCard";
import right from "../../assets/Chevron right.svg";
// import { shuffle } from "lodash";

const Featured = ({ movies }) => {
  // const shuffledMovies = shuffle(movies);
  const target = 10;
  const first10Movies = movies.slice(0, target);

  const renderMovies = first10Movies.map((movie, index) => (
    <MovieCard key={index} data={movie} />
  ));

  return (
    <div>
      <div className="featured-movies">
        <h1 className="featured">Featured Movie</h1>
        <span>
          See more
          <img src={right} alt="right" />
        </span>
      </div>
      <div className="movie-grid">{renderMovies}</div>
    </div>
  );
};

export default Featured;
