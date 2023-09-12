import React from "react";
import NavBar from "./NavBar";
import "../../styles/moviebox.css";
import imdb from "../../assets/imdb.svg";
import imbd_fruit from "../../assets/imdb_fruit.svg";
import play from "../../assets/Play.svg";
import { Button } from "@chakra-ui/react";

const Landing = ({ onSearch }) => {
  return (
    <div className="home-component">
      <NavBar onSearch={onSearch} />
      <section className="description">
        <div>
          <h1 className="desc-title">John Wick 3 : Parabellum</h1>
        </div>
        <div className="movie-rating">
          <div className="imdb">
            <img src={imdb} alt="imdb" />
            <span>86.0/100</span>
          </div>
          <div className="imdb-fruit">
            <img src={imbd_fruit} alt="imdb fruit" />
            <span>97%</span>
          </div>
        </div>
        <div className="desc-about">
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <Button
            display={"flex"}
            gap={"8px"}
            alignItems={"center"}
            backgroundColor={"#BE123C"}
            borderRadius={"6px"}
            color={"#fff"}
          >
            <img src={play} alt="Play btn" />
            WATCH TRAILER
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
