import React from "react";
import fav from "../../assets/Favorite.svg";

const MovieCard = ({ data }) => {
  const imageLink = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie-card" data-testid="movie-card">
      <img className="favourite" src={fav} alt="favourite movie" />
      <div className="image" data-testid="movie-poster">
        <img src={`${imageLink}${data.poster_path}`} alt={data.title} />
      </div>
      <div>
        <span className="release" data-testid="movie-release-date">
          {data.release_date}
        </span>
        <p className="title" data-testid="movie-title">
          {data.title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
