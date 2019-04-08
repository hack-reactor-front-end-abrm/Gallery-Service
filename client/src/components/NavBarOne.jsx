import React from 'react';

const NavBarOne = () => {
  return (
    <nav className="nav-1">
      <ul className="nav1left">
        <li className="btn">
          <a href="#">Buy</a>
          <div className="content-left">
            <ul>
              <li>Homes for Sale</li>
              <li>
                <a href="#">Homes for sale</a>
              </li>
              <li>
                <a href="#">Foreclosures</a>
              </li>
              <li>
                <a href="#">For sale by owner</a>
              </li>
              <li>
                <a href="#">Open houses</a>
              </li>
              <li>
                <a href="#">New construction</a>
              </li>
              <li>
                <a href="#">Coming soon</a>
              </li>
              <li>
                <a href="#">Recent home sales</a>
              </li>
              <li>
                <a href="#">All homes</a>
              </li>
            </ul>
          </div>
          <div className="content-right">
            <ul>
              <li>Resources</li>
              <li>
                <a href="#">Buyers Guide</a>
              </li>
              <li>
                <a href="#">Foreclosure Center</a>
              </li>
              <li>
                <a href="#">Real Estate App</a>
              </li>
            </ul>
          </div>
        </li>

        <li className="btn">Rent</li>

        <li className="btn">Sell</li>

        <li className="btn">Home loans</li>

        <li className="btn">Agent finder</li>
      </ul>

      <img
        className="logo"
        src="https://storage.googleapis.com/zillow-listing-pictures/zillow-nav-logo.png"
      />

      <div className="nav1right">
        <span className="btn">List your rental</span>

        <span className="btn">Advertise</span>

        <span className="btn">Sign in or join</span>

        <span className="btn">Help</span>
      </div>
    </nav>
  );
};

export default NavBarOne;
