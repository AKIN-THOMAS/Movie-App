import React from "react";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="terms">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className="copyright">
        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </div>
  );
};

export default Footer;
