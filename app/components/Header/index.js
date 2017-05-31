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
      background: "#A27C4B"
    }
    const headerBox={
      width: "60%",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      margin: "0 auto"
    }
    const headerBoxMobile={
      width: "60%",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      margin: "0 auto",
      justifyContent: "center"
    }
    const logo={
      order: "0 !important"
    }
    const navBar={
      order: "1 !important"
    }
    return (
      <header style={header}>
      <Responsive minDeviceWidth={1024}>
      <div style={headerBox}>
        <div style={logo}><img src="http://i1065.photobucket.com/albums/u395/monkeyzealer/bannerlogo_zpsx9cfpovc.png" /></div>
        <div style={navBar}><NavBar /></div>
      </div>
      </Responsive>
      <Responsive maxDeviceWidth={1023}>
      <div style={headerBoxMobile}>
        <div style={logo}><img src="http://i1065.photobucket.com/albums/u395/monkeyzealer/bannerlogo_zpsx9cfpovc.png" /></div>
        <div style={navBar}><NavBar /></div>
      </div>
      </Responsive>
      </header>
    );
  }
}

export default Header;
