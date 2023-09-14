import { CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import play from "../../assets/Play.svg";
import list from "../../assets/List.svg";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "031b1480eda9caa523cf69bf05e28933";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === false) {
          setError(data.status_message);
          setLoading(false);
        } else {
          setMovie(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(`This is the message ${error.message}`);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const imageLink = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-details">
      {loading ? (
        <CircularProgress
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
          height={"80vh"}
          width={"50%"}
          isIndeterminate
          color="#BE123C"
          size="120px"
        />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <div className="details-body1">
            <div className="background-poster">
              <img
                src={`${imageLink}${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>

            <div className="top">
              <div className="release_date">
                <p data-testid="movie-release-date">{movie.release_date}</p>
              </div>
              <div className="dot">
                <span>.</span>
              </div>
              <div className="movie-title">
                <h1 data-testid="movie-title">{movie.title}</h1>
              </div>
              <div className="dot">
                <span>.</span>
              </div>
              <div className="runtime">
                <p data-testid="movie-runtime"> {movie.runtime} minutes</p>
              </div>
            </div>

            <div className="overBody">
              <div className="overview">
                <p data-testid="movie-overview">{movie.overview}</p>
              </div>
              <div className="details-body2">
                <div className="part2">
                  <button className="trailer">
                    <img src={play} alt="play" />
                    Watch Tralier
                  </button>
                  <button className="more-option">
                    <img src={list} alt="list" />
                    More watch options
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
