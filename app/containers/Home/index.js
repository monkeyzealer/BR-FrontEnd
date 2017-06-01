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
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';

export default class Home extends React.PureComponent {
  render() {
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      background: "#F7E7CE",
    };
    const mainContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1",
    };
    const main={
      width: "100%",
      height: "auto",
      background: "#F7E7CE",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
    };
    const subscriptionBox={
      background: "url(http://h4z.it/Image/c4d379_esign_1131-2.png)",
      width: "100%",
      height: "500px",
      paddingTop: "20px",
      paddingBottom: "20px",
      alignItems: "center",
    }
    const subscription={
      display: "flex",
      margin: "0 auto",
      alignItems: "center",
      height: "500px",
      justifyContent: "center",
      textAlign: "center",
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
      color: "darkred",
      fontWeight: "bolder",
      margin: "0",
    }
    const SubContent={
      fontWeight: "bold",
      margin: "0"
    }
    const Title={
      background: "#AC8655",
      padding: "20px",
      color: "white",
      borderTop: "1px solid black",
      borderBottom: "1px Solid Black",
    }
    const aboutBox={
      display: "flex",
      width: "80%",
      margin: "0 auto",
      alignItems: "center",
      height: "500px",
      paddingTop: "20px",
      paddingBottom: "50px"
    }
    const FAQBox={
      width: "80%",
      margin: "0 auto",
      alignItems: "center",
      height: "auto",
      paddingTop: "20px",
      paddingBottom: "20px"
    }
    const partnerBox={
      display: "flex",
      width: "80%",
      margin: "0 auto",
      alignItems: "center",
      height: "350px",
      paddingTop: "20px",
      paddingBottom: "20px"
    }
    const about1={
      width: "33.33333333333333%",
      alignItems: "center",
      order: "0 !important",
      textAlign: "center"
    }
    const about2={
      width: "33.33333333333333%",
      alignItems: "center",
      order: "1 !important",
      textAlign: "center"
    }
    const about3={
      width: "33.33333333333333%",
      alignItems: "center",
      order: "2 !important",
      textAlign: "center"
    }
    const partner1={
      width: "20%",
      alignItems: "center",
      order: "0 !important",
      textAlign: "center",
      border: "1px solid lightgray",
      paddingTop: "20px",
      marginRight:"10px",
      background: "white"
    }
    const partner2={
      width: "20%",
      alignItems: "center",
      order: "1 !important",
      textAlign: "center",
      border: "1px solid lightgray",
      paddingTop: "20px",
      marginRight:"10px",
      marginleft:"10px",
      background: "white"
    }
    const AboutTitle={
      marginBottom: "5px",
      marginTop: "0",
      color: "darkred"
    }
    const AboutParagraph={
      width: "80%",
      margin: "0 auto",
    }
    const FAQTitle={
      marginBottom: "5px",
      color: "darkred"
    }
    const FAQParagraph={
      marginTop: "0",
    }
    const FAQBreak={
      marginBottom: "10"
    }
    const partnerTitle={
      marginTop: "5px",
      background: "rgb(58, 31, 0)",
      padding: "10px",
      marginBottom: "0"
    }
    const anchorBox={
      background: "burlywood",
      width: "100%",
      height: "auto",
      alignItems: "center",
      justifyContent: "center",
      borderTop: "1px Solid Black"
    }
    const anchor={
      width: "100%",
      margin: "0 auto",
      alignItems: "center",
      height: "auto",
      paddingTop: "20px",
      paddingBottom: "20px",
      justifyContent: "center",
      textAlign: "center"
    }
    const anchorLink={
      marginLeft: "10px",
      marginRight: "10px",
      textDecoration: "none"
    }
    const anchorHeader={
      margin: "0"
    }
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const subscribeButton={
      padding: "15px",
      background: "rgb(58, 31, 0)",
      borderRadius: "0.5em",
      color: "wheat",
      textDecoration: "none",
      paddingRight: "30px",
      paddingLeft: "30px"

    }
    const Subscribe={
    marginTop: "25px"
    }
    const styles = {
      customWidth: {
        width: 150,
      },
      underlineStyle: {
        borderColor: brown700,
      },
      underlineFocusStyle: {
        borderColor: brown900,
      },
      hintStyle: {
        width: "100%",
        height: "30px",
        color: "white",
      },

      inputStyle: {
        background: "rgba(0, 0, 0, 0.3)",
        width: "100%",
        height: "30px",
        color: "white",
        paddingLeft: "10px",
        paddingRight: "10px",
      },
      textareaStyle: {
        background: "rgba(0, 0, 0, 0.3)",
        marginTop: "0",
        paddingLeft: "10px",
        paddingRight: "10px",
        height: "258px",
        paddingTop: "5px",
        paddingBottom: "5px",
        marginBottom: "0"
      },
      uploadButton: {
        verticalAlign: 'middle',
        color: "red !important",
      },
      uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
      button: {
      backgroundColor: brown700,
      color: "red !important",
    },
    button2: {
    margin: 12,
    backgroundColor: brown900,
  },
  label1: {
    color: "red"
  },
  floatlabel1: {
    color: "red !important",
    border: "1px solid black important",
  },
};
const subscriptionBoxMobile={
  background: "url(http://h4z.it/Image/c4d379_esign_1131-2.png)",
  width: "100%",
  height: "auto",
  paddingTop: "20px",
  paddingBottom: "20px",
  alignItems: "center",
}
const subscriptionMobile={
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}
const subscriptionImageMobile={
  textAlign: "center",
}
const subscriptionContentMobile={
  textAlign: "center",
}
const aboutBoxMobile={
  width: "100%",
  margin: "0 auto",
  alignItems: "center",
  height: "auto",
  paddingTop: "20px",
  paddingBottom: "50px",
  textAlign:"center"
}
const aboutMobile={
  width: "100%",
  alignItems: "center",
  textAlign: "center",
  paddingTop: "10px",
  paddingBottom: "10px"
}
const partnerMobile={
  width: "100%",
  alignItems: "center",
  textAlign: "center",
  paddingTop: "10px",
  paddingBottom: "0px"
}
const partnerBoxMobile={
  width: "100%",
  margin: "0 auto",
  alignItems: "center",
  height: "auto",
  paddingTop: "20px",
  paddingBottom: "0px"
}
const TitleMobile={
  background: "#AC8655",
  padding: "20px",
  color: "white",
  borderTop: "1px solid black",
  borderBottom: "1px Solid Black",
  textAlign: "center"
}
const Links={
  color: "#6F4E37",
  marginTop: "0"
}
const topLink={
  top: "-3px",
  position: "relative",
  float: "right",
    padding: "15px"
}
const topLinkMobile={
  textAlign: "center"
}
    return (
      <div style={Container}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <Header id="top"/>
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
          <div style={main}>
            <div style={subscriptionBox}>
               <div style={subscription}>
                <div style={subscriptionImage}><img style={{width: '660px', margin: '30px' }} src="http://h4z.it/Image/82e8fe_kit.png" /></div>
                <div style={subscriptionContent}>
                  <h1 style={SubHeader}><div style={headerTitle}>BUILD YOUR OWN</div>ROBOT AT HOME!</h1>
                  <p style={SubContent}>Box Robot is a subscription service that delivers Robot kits to your door every month.</p>
                  <p style={Subscribe}><a style={subscribeButton} href="/store">Subscribe</a></p>
                </div>
              </div>
            </div>
            <div style={anchorBox}>
              <div style={anchor}>
              <h1 style={Links}>Links<hr /></h1>
              <h4 style={anchorHeader}><a style={anchorLink} className="anchor" href="#how">How Box Robot Works</a><a style={anchorLink} className="anchor" href="#FAQ">FAQ</a><a style={anchorLink} className="anchor" href="#partner">Partners</a></h4>
              </div>
            </div>
              <div style={Title}>
              <h1 id="how">How Box Robot Works <a style={topLink} className="top" href="#top">Back to Top</a></h1>
              </div>
              <div style={aboutBox}>
                <div style={about1}><img style={{width: '80%'}} src="http://h4z.it/Image/07ec16_community.png" />
                <h4 style={AboutTitle}>Build Fun Devices</h4>
                <p style={AboutParagraph}>Subscribe to Box Robot and receive a different robot project every month.</p>
                </div>
                <div style={about2}><img style={{width: '80%'}} src="http://h4z.it/Image/f8503b_learning_app.png" />
                <h4 style={AboutTitle}>Guided Instructions</h4>
                <p style={AboutParagraph}>Once you receive your kit, sign into our Learning Platform and follow simple video instructions and code lessons.</p>
                </div>
                <div style={about3}><img style={{width: '80%'}} src="http://h4z.it/Image/032d2a_gift.png" />
                <h4 style={AboutTitle}>Get Creative</h4>
                <p style={AboutParagraph}>Customize your finished project to improve your skills and share with the community.</p>
                </div>
              </div>
            <div style={Title}>
            <h1 id="FAQ">Frequently Asked Questions <a style={topLink} className="top" href="#top">Back to Top</a></h1>
            </div>
            <div style={FAQBox}>
            <h3 style={FAQTitle}>What is Box Robot</h3>
            <p style={FAQParagraph}>Box Robot teaches beginners a basic understanding of building Robots through a monthly kit with carefully curated and easy to follow instructions.
            We’ve designed engaging kits that allow you to create, learn and explore by combining hands on hardware and sometimes a little software accompanied by video tutorials.</p>
            <h3 style={FAQTitle}>How does Box Robot work?</h3>
            <p style={FAQParagraph}>
            Sign up to any one of our subscription tiers and receive a new project every month.
            When you receive your project, log into our Learning Platform and follow guided tutorials and coding lessons to build your project from start to finish.
            Once you’re done, prototype your own ideas by adding buttons and sensors to your projects so it can do even more.
            </p>
            <h3 style={FAQTitle}>Who is Box Robot for? Do I have to know Programing</h3>
            <p style={FAQParagraph}>
            Anyone - from beginners to experienced super makers - can have fun and learn new skills building Robots with our kits and step-by-step instructions.
            No Robots knowledge is needed. The assembly instructions are all presented step-by-step via written and video tools on our Learning Platform.
            </p>
            <h3 style={FAQTitle}>What type of subscription plans do you offer?</h3>
            <p style={FAQParagraph}>
            We offer four recurring plans: one, three, six, and twelve month subscription tiers depending on how often you’d like to build projects.
            </p>
            <h3 style={FAQTitle}>How about age ranges?</h3>
            <p style={FAQParagraph}>
            We recommend ages 13 and up. Since soldering is involved, we recommend parental or teacher supervision for anyone under 13 years of age.
            The instructions need to be followed in order and there can be many small parts. You know your learner better than we do – Box Robot might be a great monthly project for a parent, grandparent,
            or older sibling to work with a younger learner... especially as they get used to building Box Robot projects.
            </p>
            <h3 style={FAQTitle}>Is soldering involved?</h3>
            <p style={FAQParagraph}>
            Yes - soldering is involved in every Box Robot project. We believe in nitty-gritty hardware and feel that soldering is one of the most important skills every beginner should possess.
            </p>
            <h3 style={FAQTitle}>What if I don’t know how to solder?</h3>
            <p style={FAQParagraph}>
            That’s okay. Our Learning Platform provides introductory lessons on how to solder. We’ll also point you to other online resources so you can continue to master your soldering technique
            </p>
            <h3 style={FAQTitle}>Are tools provided in my kit?</h3>
            <p style={FAQParagraph}>
            Tools are not provided in your monthly kit. You need a soldering iron and solder wire; soldering is involved in all Box Robot projects.
            We also recommend that you own screwdrivers and wire cutters. We do offer our own Box Robot Toolkit with the most essential tools for building Robots.
            </p>
            <h3 style={FAQTitle}>What tools do you recommend?</h3>
            <p style={FAQParagraph}>
            Here are some additional tools that we recommend you have while building Box Robot projects:
            <ui>
            <li>Soldering iron <span style={{color:'red'}}>Required*</span></li>
            <li>Solder stand</li>
            <li>Solder sucker</li>
            <li>Solder wire <span style={{color:'red'}}>Required*</span></li>
            <li>Diagonal cutters</li>
            <li>Wire cutters</li>
            <li>Glue gun</li>
            <li>Glue sticks</li>
            <li>Screwdriver set</li>
            <li>Solder wick</li>
            </ui>
            <br />
            We offer the Box Robot toolkit which has all the essential tools you need for building Box Robot projects.
            <br />Soldering <span style={{color:'red'}}>Required*</span> for all Box Robot projects
            </p>
            <h3 style={FAQTitle}>Does a microcontroller come in every kit?</h3>
            <p style={FAQParagraph}>
            No. One microcontroller (called an Uno board) comes in your very first kit only. The Arduino-compatible Uno board is reusable and can be used from project to project. However,
            if you don’t want to disassemble projects as you progress into your subscription, we strongly recommend that you purchase additional Uno boards available on our online store.
            </p>
            <h3 style={FAQTitle}>I don’t know how to program?</h3>
            <p style={FAQParagraph}>
            No worries! The Learning Platform takes you step-by-step through the building and programing processes. And additional help is available through our online community.
            </p>
            <h3 style={FAQTitle}>What kind of computer do I need for the programming?</h3>
            <p style={FAQParagraph}>
            The type of computer does not matter so much. But you do need to have the latest version of the Arduino IDE installed on your computer. That will be covered in the Learning Platform.
            </p>
            <h3 style={FAQTitle}>How are Box Robot kits designed?</h3>
            <p style={FAQParagraph}>
            All Box Robot projects are designed by our team in house, which include engineers and former educators. Every kit is tested with beginners, students, and hobbyists to ensure the projects
            are fun and introduce the necessary skills needed in building Robotics projects. We go through the design process every month and create instructions from scratch so that you have
            a smooth experience.
            </p>
            <h3 style={FAQTitle}>What if I get stuck and need help with my project?</h3>
            <p style={FAQParagraph}>
            <div style={FAQBreak}>Tinkering with Robots can be challenging. If you get stuck, you’re not alone.
            We encourage you to log into the Learning Platform and ask a question in the Box Robot forums.</div>

            <div>Share your projects, ideas, get support and learn best practices from the Box Robot community.
            Between the community forum, chat, and weekly project webinars, you’ll get the support you need on every project.</div>
            </p>
            <h3 style={FAQTitle}>Where do subscriptions ship?</h3>
            <p style={FAQParagraph}>
            Box Robot kits ship anywhere in the world. Shipping for monthly subscriptions is free in the United States and an additional $10 per month to international orders.
            There are additional shipping charges for add-ons such as tools, boards, and sensors.
            </p>
            <h3 style={FAQTitle}>What is your cancellation policy?</h3>
            <p style={FAQParagraph}>
            We hate to see you go. You can cancel a monthly subscription anytime after the first kit ships by using our online account management tool.
            Auto-renewing subscriptions (pay every 3, 6, 12 months) are only eligible for cancellation after the initial term has been completed.
            </p>

            </div>
            <div style={Title}>
            <h1 id="partner">Partnered With<a style={topLink} className="top" href="#top">Back to Top</a></h1>
            </div>
            <div style={partnerBox}>
              <div style={partner1}>
                <a style={{textDecoration:'none', color:'wheat'}} href="https://theclubhou.se/">
                <img style={{width: '80%'}} src="https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-1/p200x200/734626_350566975040997_1526795896_n.jpg?oh=5cd39d0a646f1d3465993f6c41ae5630&oe=59E69646" />
                <h4 style={partnerTitle}>The ClubHou.se</h4>
                </a>
              </div>
              <div style={partner2}>
                <a style={{textDecoration:'none', color:'wheat'}} href="http://www.wierstewart.com/">
                <img style={{width: '80%'}} src="https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-1/p200x200/11108956_911984435510537_6338015296726442564_n.jpg?oh=05536c5c1899118993f88879531bc2a0&oe=59A8F11C" />
                <h4 style={partnerTitle}>Wier / Stewart</h4>
                </a>
              </div>
            </div>
          </div>
        </main>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
        <main style={mainContainer}>
          <div style={main}>
            <div style={subscriptionBoxMobile}>
               <div style={subscriptionMobile}>
                <div style={subscriptionImage}><img style={{width: '90%'}} src="http://h4z.it/Image/82e8fe_kit.png" /></div>
                <div style={subscriptionContentMobile}>
                  <h1 style={SubHeader}><div style={headerTitle}>BUILD YOUR OWN</div>ROBOT AT HOME!</h1>
                  <p style={SubContent}>Box Robot is a subscription service that delivers Robot kits to your door every month.</p>
                  <p style={Subscribe}><a style={subscribeButton} href="/store">Subscribe</a></p>
                </div>
              </div>
            </div>
            <div style={anchorBox}>
              <div style={anchor}>
              <h1 style={Links}>Links<hr /></h1>
              <h4 style={anchorHeader}><p><a style={anchorLink} className="anchor" href="#how">How Box Robot Works</a></p><p><a style={anchorLink} className="anchor" href="#FAQ">FAQ</a></p><p><a style={anchorLink} className="anchor" href="#partner">Partners</a></p></h4>
              </div>
            </div>
              <div style={TitleMobile}>
              <h2 id="how">How Box Robot Works</h2>
              <p><a style={topLinkMobile} className="top" href="#top">Back to Top</a></p>
              </div>
              <div style={aboutBoxMobile}>
                <div style={aboutMobile}><img style={{width: '80%'}} src="http://h4z.it/Image/07ec16_community.png" />
                <h4 style={AboutTitle}>Build Fun Devices</h4>
                <p style={AboutParagraph}>Subscribe to Box Robot and receive a different robot project every month.</p>
                </div>
                <div style={aboutMobile}><img style={{width: '80%'}} src="http://h4z.it/Image/f8503b_learning_app.png" />
                <h4 style={AboutTitle}>Guided Instructions</h4>
                <p style={AboutParagraph}>Once you receive your kit, sign into our Learning Platform and follow simple video instructions and code lessons.</p>
                </div>
                <div style={aboutMobile}><img style={{width: '80%'}} src="http://h4z.it/Image/032d2a_gift.png" />
                <h4 style={AboutTitle}>Get Creative</h4>
                <p style={AboutParagraph}>Customize your finished project to improve your skills and share with the community.</p>
                </div>
              </div>
            <div style={TitleMobile}>
            <h2 id="FAQ">Frequently Asked Questions</h2>
              <p><a style={topLinkMobile} className="top" href="#top">Back to Top</a></p>
            </div>
            <div style={FAQBox}>
            <h3 style={FAQTitle}>What is Box Robot</h3>
            <p style={FAQParagraph}>Box Robot teaches beginners a basic understanding of building Robots through a monthly kit with carefully curated and easy to follow instructions.
            We’ve designed engaging kits that allow you to create, learn and explore by combining hands on hardware and sometimes a little software accompanied by video tutorials.</p>
            <h3 style={FAQTitle}>How does Box Robot work?</h3>
            <p style={FAQParagraph}>
            Sign up to any one of our subscription tiers and receive a new project every month.
            When you receive your project, log into our Learning Platform and follow guided tutorials and coding lessons to build your project from start to finish.
            Once you’re done, prototype your own ideas by adding buttons and sensors to your projects so it can do even more.
            </p>
            <h3 style={FAQTitle}>Who is Box Robot for? Do I have to know Programing</h3>
            <p style={FAQParagraph}>
            Anyone - from beginners to experienced super makers - can have fun and learn new skills building Robots with our kits and step-by-step instructions.
            No Robots knowledge is needed. The assembly instructions are all presented step-by-step via written and video tools on our Learning Platform.
            </p>
            <h3 style={FAQTitle}>What type of subscription plans do you offer?</h3>
            <p style={FAQParagraph}>
            We offer four recurring plans: one, three, six, and twelve month subscription tiers depending on how often you’d like to build projects.
            </p>
            <h3 style={FAQTitle}>How about age ranges?</h3>
            <p style={FAQParagraph}>
            We recommend ages 13 and up. Since soldering is involved, we recommend parental or teacher supervision for anyone under 13 years of age.
            The instructions need to be followed in order and there can be many small parts. You know your learner better than we do – Box Robot might be a great monthly project for a parent, grandparent,
            or older sibling to work with a younger learner... especially as they get used to building Box Robot projects.
            </p>
            <h3 style={FAQTitle}>Is soldering involved?</h3>
            <p style={FAQParagraph}>
            Yes - soldering is involved in every Box Robot project. We believe in nitty-gritty hardware and feel that soldering is one of the most important skills every beginner should possess.
            </p>
            <h3 style={FAQTitle}>What if I don’t know how to solder?</h3>
            <p style={FAQParagraph}>
            That’s okay. Our Learning Platform provides introductory lessons on how to solder. We’ll also point you to other online resources so you can continue to master your soldering technique
            </p>
            <h3 style={FAQTitle}>Are tools provided in my kit?</h3>
            <p style={FAQParagraph}>
            Tools are not provided in your monthly kit. You need a soldering iron and solder wire; soldering is involved in all Box Robot projects.
            We also recommend that you own screwdrivers and wire cutters. We do offer our own Box Robot Toolkit with the most essential tools for building Robots.
            </p>
            <h3 style={FAQTitle}>What tools do you recommend?</h3>
            <p style={FAQParagraph}>
            Here are some additional tools that we recommend you have while building Box Robot projects:
            <ui>
            <li>Soldering iron <span style={{color:'red'}}>Required*</span></li>
            <li>Solder stand</li>
            <li>Solder sucker</li>
            <li>Solder wire <span style={{color:'red'}}>Required*</span></li>
            <li>Diagonal cutters</li>
            <li>Wire cutters</li>
            <li>Glue gun</li>
            <li>Glue sticks</li>
            <li>Screwdriver set</li>
            <li>Solder wick</li>
            </ui>
            <br />
            We offer the Box Robot toolkit which has all the essential tools you need for building Box Robot projects.
            <br />Soldering <span style={{color:'red'}}>Required*</span> for all Box Robot projects
            </p>
            <h3 style={FAQTitle}>Does a microcontroller come in every kit?</h3>
            <p style={FAQParagraph}>
            No. One microcontroller (called an Uno board) comes in your very first kit only. The Arduino-compatible Uno board is reusable and can be used from project to project. However,
            if you don’t want to disassemble projects as you progress into your subscription, we strongly recommend that you purchase additional Uno boards available on our online store.
            </p>
            <h3 style={FAQTitle}>I don’t know how to program?</h3>
            <p style={FAQParagraph}>
            No worries! The Learning Platform takes you step-by-step through the building and programing processes. And additional help is available through our online community.
            </p>
            <h3 style={FAQTitle}>What kind of computer do I need for the programming?</h3>
            <p style={FAQParagraph}>
            The type of computer does not matter so much. But you do need to have the latest version of the Arduino IDE installed on your computer. That will be covered in the Learning Platform.
            </p>
            <h3 style={FAQTitle}>How are Box Robot kits designed?</h3>
            <p style={FAQParagraph}>
            All Box Robot projects are designed by our team in house, which include engineers and former educators. Every kit is tested with beginners, students, and hobbyists to ensure the projects
            are fun and introduce the necessary skills needed in building Robotics projects. We go through the design process every month and create instructions from scratch so that you have
            a smooth experience.
            </p>
            <h3 style={FAQTitle}>What if I get stuck and need help with my project?</h3>
            <p style={FAQParagraph}>
            <div style={FAQBreak}>Tinkering with Robots can be challenging. If you get stuck, you’re not alone.
            We encourage you to log into the Learning Platform and ask a question in the Box Robot forums.</div>

            <div>Share your projects, ideas, get support and learn best practices from the Box Robot community.
            Between the community forum, chat, and weekly project webinars, you’ll get the support you need on every project.</div>
            </p>
            <h3 style={FAQTitle}>Where do subscriptions ship?</h3>
            <p style={FAQParagraph}>
            Box Robot kits ship anywhere in the world. Shipping for monthly subscriptions is free in the United States and an additional $10 per month to international orders.
            There are additional shipping charges for add-ons such as tools, boards, and sensors.
            </p>
            <h3 style={FAQTitle}>What is your cancellation policy?</h3>
            <p style={FAQParagraph}>
            We hate to see you go. You can cancel a monthly subscription anytime after the first kit ships by using our online account management tool.
            Auto-renewing subscriptions (pay every 3, 6, 12 months) are only eligible for cancellation after the initial term has been completed.
            </p>
            </div>
            <div style={TitleMobile}>
            <h2 id="partner">Partnered With</h2>
              <p><a style={topLinkMobile} className="top" href="#top">Back to Top</a></p>
            </div>
            <div style={partnerBoxMobile}>
              <div style={partnerMobile}>
                <a style={{textDecoration:'none', color:'wheat'}} href="https://theclubhou.se/">
                <img style={{width: '80%'}} src="https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-1/p200x200/734626_350566975040997_1526795896_n.jpg?oh=5cd39d0a646f1d3465993f6c41ae5630&oe=59E69646" />
                <h4 style={partnerTitle}>The ClubHou.se</h4>
                </a>
              </div>
              <div style={partnerMobile}>
                <a style={{textDecoration:'none', color:'wheat'}} href="http://www.wierstewart.com/">
                <img style={{width: '80%'}} src="https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-1/p200x200/11108956_911984435510537_6338015296726442564_n.jpg?oh=05536c5c1899118993f88879531bc2a0&oe=59A8F11C" />
                <h4 style={partnerTitle}> Wier / Stewart</h4>
                </a>
              </div>
            </div>
          </div>
        </main>
        </Responsive>
        <Footer style={footerStyle} />
      </div>
    );
  }
}
