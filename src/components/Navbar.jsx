import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="n-container">
          <div className="n-logo">
            <span>Anton Barziankou</span>
          </div>
          <div className="n-right">
            <div className="n-menu">
              <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest in </span>
              <span>Test it!</span>
            </div>
            <div className="fund-button">
              <button>button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
