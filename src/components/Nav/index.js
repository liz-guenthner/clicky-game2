import React from "react";
import "./style.css";

function Nav(props) {
    
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li>Click a pup to begin!</li>
                <li>Score: {props.count} | Top Score: { props.score }</li>
            </ul>
        </nav>
      );
}

export default Nav;