import React from "react";
import fav from "../../assets/Favorite.svg";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  const imageLink = "https://image.tmdb.org/t/p/w500";
  return (
    <Link to={`movies/${data.id}`}>
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
    </Link>
  );
};

export default MovieCard;
