import React from "react";
import MovieCard from "./MovieCard";
import right from "../../assets/Chevron right.svg";

const Featured = ({ movies }) => {
  const target = 10;
  const first10Movies = movies.slice(0, target); // Slice the first 10 movies

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
