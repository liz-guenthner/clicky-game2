import React from "react";
import "./style.css";

function Nav(props) {
    
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Pup Game</a>
                </li>
                <li>{ props.message }</li>
                <li>Count: { props.count } | Score: { props.score }</li>
            </ul>
        </nav>
      );
}

export default Nav;