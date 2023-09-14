import React from "react";
import moviebox from "../../assets/moviebox.svg";
import { Link } from "react-router-dom";
import home from "../../assets/home.svg";
import movies from "../../assets/movie.svg";
import tv from "../../assets/tv.svg";
import calendar from "../../assets/Calendar.svg";
import logout from "../../assets/Logout.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dashLogo">
        <Link to={"/"}>
          <img src={moviebox} alt="moviebox" />
        </Link>
      </div>
      <div className="dashItems">
        <div className="item">
          <div>
            <img src={home} alt="home" />
            <p>Home</p>
          </div>
        </div>
        <div className="item-hignlight">
          <div>
            <img src={movies} alt="home" />
            <p>Movies</p>
          </div>
        </div>
        <div className="item">
          <div>
            <img src={tv} alt="home" />
            <p>TV Series</p>
          </div>
        </div>
        <div className="item">
          <div>
            <img src={calendar} alt="home" />
            <p>Upcoming</p>
          </div>
        </div>
        {/* box */}
        <div className="start-playing">
          <div>
            <div className="quizes">
              <p>Play movie quizes and earn free tickets</p>
            </div>
            <div className="people">
              <p>50k people are playing now</p>
            </div>
            <div className="start-btn">
              <button>Start playing</button>
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            marginTop: "20px",
          }}
        >
          <div>
            <img src={logout} alt="home" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
