import React, { useEffect, useState } from "react";
import Landing from "../components/moviebox/Landing";
import Featured from "../components/moviebox/Featured";
import Footer from "../components/moviebox/Footer";
import { CircularProgress } from "@chakra-ui/react";
import ErrorMessage from "../components/ErrorMessage";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL = "https://api.themoviedb.org/3/movie/top_rated?";
  const API_KEY = "031b1480eda9caa523cf69bf05e28933";

  useEffect(() => {
    fetch(`${API_URL}api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section>
        <Landing />
      </section>
      <section>
        <Featured movies={movies} />
        <div className="loading">
          {loading && (
            <CircularProgress isIndeterminate color="#BE123C" size="120px" />
          )}
        </div>
        {errorMessage && (
          <>
            <ErrorMessage message={errorMessage} />
          </>
        )}
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Homepage;
