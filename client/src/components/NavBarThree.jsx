import React from 'react';

const NavBarThree = () => {
  return (
    <div id="whiteNavBar">
      <div id="whiteNavBarPublicViewOwnerView">
        <a href={window.location.href} className="publicViewOwnerViewText" id="publicViewText">
          Public View&nbsp;&nbsp;&nbsp;
        </a>
        <a href={window.location.href} className="publicViewOwnerViewText" id="ownerViewText">
          Owner View
        </a>
      </div>

      <div id="whiteNavBarAddressLinks">
        <a className="whiteNavBarAddressLinks" href="https://www.zillow.com/ny/">
          New York&nbsp;{'-'}&nbsp;
        </a>
        <a className="whiteNavBarAddressLinks" href="https://www.zillow.com/new-york-ny/">
          New York&nbsp;{'-'}&nbsp;
        </a>
        <a
          className="whiteNavBarAddressLinks"
          href="https://www.zillow.com/queens-new-york-ny-11374/"
        >
          11374&nbsp;{'-'}&nbsp;
        </a>
        <a className="whiteNavBarAddressLinks" href="https://www.zillow.com/queens-new-york-ny/">
          Queens&nbsp;{'-'}&nbsp;
        </a>
        <a
          className="whiteNavBarAddressLinks"
          href="https://www.zillow.com/elmhurst-queens-new-york-ny/"
        >
          Elmhurst
        </a>
      </div>
    </div>
  );
};

export default NavBarThree;
