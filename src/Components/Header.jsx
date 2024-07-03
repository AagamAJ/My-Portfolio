/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div className="header-div">
      <a href="#home"><strong>Home</strong></a>
      <a href="#about"><strong>About</strong></a>
      <a href="#portfolio"><strong>Portfolio</strong></a>
      <a href="#footer"><strong>Contact</strong></a>
    </div>
  );
};

export default Header;
