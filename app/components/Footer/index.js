/**
*
* Footer
*
*/

import React from 'react';
import {Link} from 'react-router';
import Responsive from 'react-responsive';

class Footer extends React.PureComponent {
  render() {
    const footer={
      background: "#A27C4B",
      color: "white",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      fontSize: "20px",
      fontFamily: "Arial",
      height: "auto",
      backgroundRepeat: "repeat"
    }
    const footerInfo={
      width: "50%",
      display: "flex",
      flexDirection: "column",
    };
    const footLeft={
      paddingTop: "0.2em",
      paddingBottom: "10px",
      paddingLeft: "10%",
      textAlign: "left",
      marginTop: "10px",
      marginBottom: "0",

    };
    const footRight={
      paddingTop: "0.2em",
      paddingBottom: "10px",
      paddingRight: "10%",
      textAlign: "right",
      marginTop: "10px",
      marginBottom: "0",
    };
    const footerInfoMobile={
      width: "100%",
      display: "flex",
      flexDirection: "row",
    };
    const footLeftMobile={
      paddingTop: "0.2em",
      paddingBottom: "0",
      paddingRight: "10px",
      paddingLeft: "10px",
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "0",
      width:"100%"

    };
    const footRightMobile={
      paddingTop: "0.2em",
      paddingBottom: "10px",
      paddingRight: "10px",
      paddingLeft: "10px",
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "0",
      width:"100%"
    };
    const footerBox={
      width:"100%",
      display:"flex",
      flexDirection: "row",
    }
    return (
      <footer style={footer}>
      <Responsive minDeviceWidth={1024}>
        <div style={footerBox}>
        <div style={footerInfo}>
        <div style={footLeft}> &copy; Box Robot 2017 </div>
        </div>
        <div style={footerInfo}>
        <div style={footRight}> Made by Andrew Duesler & Suzette Verbeck</div>
        </div>
        </div>
      </Responsive>
      <Responsive maxDeviceWidth={1023}>
        <div style={footerInfoMobile}>
        <div style={footLeftMobile}> &copy; Box Robot 2017</div>
        </div>
        <div style={footerInfoMobile}>
        <div style={footRightMobile}> Made by Andrew Duesler & Suzette Verbeck</div>
        </div>
      </Responsive>
      </footer>
    );
  }
}

export default Footer;
