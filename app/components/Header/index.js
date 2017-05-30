/**
*
* Header
*
*/

import React from 'react';
import NavBar from 'components/NavBar';
import {Link} from 'react-router';
import Responsive from 'react-responsive';

class Header extends React.PureComponent {
  render() {
    const header={
      width: "100%",
      background: "orange"
    }
    const headerBox={
      width: "60%",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      margin: "0 auto"
    }
    const logo={
      order: "0 !important"
    }
    const navBar={
      order: "1 !important"
    }
    return (
      <header style={header}>
      <div style={headerBox}>
        <div style={logo}><img src="http://i1065.photobucket.com/albums/u395/monkeyzealer/bannerlogo_zpsx9cfpovc.png" /></div>
        <div style={navBar}><NavBar /></div>
      </div>
      </header>
    );
  }
}

export default Header;
