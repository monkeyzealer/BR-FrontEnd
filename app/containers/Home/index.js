/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Responsive from 'react-responsive';

export default class Home extends React.PureComponent {
  render() {
    const mainContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1",
      borderTop: "1px solid black"
    };
    const main={
      width: "100%",
      height: "auto",
      background: "white",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
    };
    const subscriptionBox={
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/robots-pattern-design_1131-2_zpsvjjscyla.png)",
      width: "100%",
      height: "500px",
      padding: "20px",
      alignItems: "center",
    }
    const subscription={
      display: "flex",
      margin: "0 auto",
      alignItems: "center",
      height: "500px",
      justifyContent: "center",
    }
    const subscriptionImage={
      order: "0 !important"
    }
    const subscriptionContent={
      order: "1 !important",
      textAlign: "center",
      width: "400px"
    }
    const SubHeader={
      marginBottom: "10px"
    }
    const headerTitle={
      color: "orangered",
      fontWeight: "bolder",
      margin: "0",
    }
    const SubContent={
      fontWeight: "bold",
      margin: "0"
    }
    const Title={
      background: "orange",
      padding: "20px",
      color: "rgb(58, 31, 0)",
      borderTop: "1px solid black",
      borderBottom: "1px Solid Black",
    }
    const aboutBox={
      display: "flex",
      width: "100%",
      margin: "0 auto",
      alignItems: "center",
      height: "500px",
    }

    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <Header />
        <main style={mainContainer}>
          <div style={main}>
            <div style={subscriptionBox}>
               <div style={subscription}>
                <div style={subscriptionImage}><img style={{width: '660px', margin: '30px' }}src="http://i1065.photobucket.com/albums/u395/monkeyzealer/kit_zpsyfrratgz.png" /></div>
                <div style={subscriptionContent}>
                  <h1 style={SubHeader}><div style={headerTitle}>BUILD YOUR OWN</div>ROBOT AT HOME!</h1>
                  <p style={SubContent}>Box Robot is a subscription service that delivers Robot kits to your door every month.</p>
                </div>
              </div>
            </div>
            <div style={Title}>
            <h1>How Box Robot Works</h1>
            </div>
            <div style={aboutBox}>

            </div>
          </div>
        </main>
      </div>
    );
  }
}
