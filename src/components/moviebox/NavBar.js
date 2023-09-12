import React, { useState } from "react";
import "../../styles/moviebox.css";
import movieBox from "../../assets/Logo.svg";
import SearchBar from "./SearchBar";
import menu_dash from "../../assets/menu-dash.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <Link to={"/"}>
            <img src={movieBox} alt="Logo" />
          </Link>
        </div>
        <div className="search content">
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="menu content">
          <div className="sign-in">Sign in</div>
          <div className="menu-btn">
            <img src={menu_dash} alt="menu" />
          </div>
        </div>
      </nav>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className="bars">
          <FaBars />
        </div>
      </div>
    </>
  );
};

export default NavBar;
