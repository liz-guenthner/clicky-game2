import React from "react";
import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <h1>Clicky Game of Pups!</h1>
            <h2>Click on a pup to randomize and earn points.<br />Start over if you click on an image more than once!</h2>
        </header>
      );
}

export default Header;