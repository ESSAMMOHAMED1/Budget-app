import React from 'react';
import LogoImg from "../../../assets/images/logo.png"
const Header = () => {
  return (
    <header className="header scrolled">
      <div className="container">
        <div className="header_row">
          {/* brand  */}
          <div className="header_brand">
            <div className="logo">
              <img src={LogoImg} alt="brand logo" />
            </div>
            <h1>Budget App</h1>
          </div>
          {/* action  */}
          <div className="header_actions">
            <div className="header_actions-add">
              <button> + </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
