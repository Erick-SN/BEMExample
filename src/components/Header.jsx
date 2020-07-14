import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <>
      <div className="Header">
        {/* //Block */}
        {/* <div className="Header-container">
          // Block */}
        <div className="Header__logo">
          {/* //Element */}
          <h1>PlatziVideo</h1>
        </div>
        <div className="Header__button Header__button--about">
          <a href="!#">About</a>
        </div>
        <div className="Header__button Header__button--success">
          <a href="!#">About</a>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Header;
