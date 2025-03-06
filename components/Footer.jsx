import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2025 WUAICOT. All rights reserverd</p>
      <p className="icons">
        <AiFillLinkedin
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.linkedin.com/in/wuaicot/");
          }}
        />
        <AiFillInstagram
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.instagram.com/naycol.linares/");
          }}
        />
        <AiOutlineTwitter
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.twitter.com/naiycol/");
          }}
        />
        <AiFillGithub
          className="cursor-pointer"
          onClick={() => {
            window.open("https://github.com/wuaicot");
          }}
        />
      </p>
    </div>
  );
};

export default Footer;
