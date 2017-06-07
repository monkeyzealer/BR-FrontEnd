/*
 *
 * CustomerRoster
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import SelectField from 'material-ui/SelectField';
 import MenuItem from 'material-ui/MenuItem';
 import TextField from 'material-ui/TextField';
 import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';
 import Responsive from 'react-responsive';
 import AppBar from 'material-ui/AppBar';
 import FlatButton from 'material-ui/FlatButton';
 import FontIcon from 'material-ui/FontIcon';
 import ActionAndroid from 'material-ui/svg-icons/action/android';
 import RaisedButton from 'material-ui/RaisedButton';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header';



export default class CustomerRoster extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      users:[],
      user:JSON.parse(sessionStorage.getItem("user")),
      token:sessionStorage.getItem("token"),
    }
  }
  componentWillMount(){
    fetch("http://boxrobot.codemonkeytestsites.com/api/allUsers?token=" + this.state.token,{
      headers:{"Authorization":"Bearer "+this.state.token}
    })
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        users:json
      })
    }.bind(this))
}

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
      background: "url(http://h4z.it/Image/c4d379_esign_1131-2.png)",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      paddingTop: "20px",
      paddingBottom: "20px",
      alignItems: "center",
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const table ={
      width: "90%",
      margin: "0 auto"
    }
    const tableHeader ={
      background: "rgb(58, 31, 0)",
      color: "wheat"
    }
    const flexGrid ={
      margin: "0 auto",
      padding: "0",
      display: "-webkit-flex",
      display: "flex",
      flexWrap: "wrap",
      width: "95%",
      marginBottom: "20px"
    };
    const userBox={
      backgroundColor: "rgba(58, 31, 0,0.6)",
      width: "24%",
      margin: "0.5em",
      textDecoration: "none",
      color: "wheat",
      border: "1px solid black"
    };
    const userTitle={
    marginBottom: "10px",
    textAlign: "center",
    marginTop: "5px",
    borderBottom: "2px solid black",
    paddingBottom: "5px",
    };
    const userInfo={
      textAlign: "center",
      paddingBottom: "10px"
    }
    const userContent={
      width: "100%",
      height: "auto",
      overflow: "hidden",
    };
    const userImage={
      width: "250px",
      height: "250px",
      background: "rgba(255, 255, 255, 0.3)",
      position: "relative",
      padding: "0",
      borderRadius: "0",
      marginTop: "20px"
    }
    const avatar={
      width: "70%",
      margin: "0 auto",
      textAlign: "center",
    }
    const flexGridMobile ={
      padding: "0",
      display: "-webkit-flex",
      display: "flex",
      flexWrap: "wrap",
      width: "95%",
      marginBottom: "20px"
    };
    const userBoxMobile={
        backgroundColor: "rgba(58, 31, 0,0.6)",
        width: "100%",
        margin: "0.5em",
        textDecoration: "none",
        color: "wheat",
        border: "1px solid black"
    };
    const update={
      textAlign: "center"
    }
    const edit={
      color: "wheat",
      background: "rgb(58, 31, 0)",
      padding: "5px",
      paddingLeft: "20px",
      paddingRight: "20px",
      textDecoration: "none",
    }
    return (
      <div style={Container}>
        <Helmet title="CustomerRoster" meta={[ { name: 'description', content: 'Description of CustomerRoster' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
          <div style={main}>
          <div style={flexGrid}>
          {this.state.users.map((users,i) => (
            <Link to={`/customer/${users.id}`} style={userBox}>
              <div style={userContent}>
                <div style={avatar}>
                  <img
                      src={users.image}
                      style={userImage}
                      className="Product"
                    />
                </div>
                <h2 style={userTitle}>{users.username}</h2>
                <div style={userInfo}>
                <div><b>Name:</b> {users.name} </div>
                <div><b>Email:</b> {users.email} </div>
                <div><b>Phone:</b> {users.phone}</div>
                <div><b>Address:</b> {users.address}</div>
                <p style={update}><Link style={edit} to={`/update-user/${users.id}`}>Edit</Link></p>
                </div>
              </div>
            </Link>
            ))}
          </div>
          </div>
        </main>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
        <main style={mainContainer}>
          <div style={main}>
          <div style={flexGridMobile}>
          {this.state.users.map((users,i) => (
            <div style={userBoxMobile}>
              <div style={userContent}>
                <div style={avatar}>
                  <img
                      src={users.image}
                      style={userImage}
                      className="Product"
                    />
                </div>
                <h2 style={userTitle}>{users.username}</h2>
                <div style={userInfo}>
                <div><b>Name:</b> {users.name} </div>
                <div><b>Email:</b> {users.username} </div>
                <div><b>Phone:</b> {users.phone}</div>
                <div><b>Address:</b> {users.address}</div>
                <p style={update}><Link style={edit} to={`/update-user/${users.id}`}>Edit</Link></p>
                </div>
              </div>
            </div>
            ))}
          </div>
          </div>
        </main>
        </Responsive>
        <Footer style={footerStyle} />
      </div>
    );
  }
}
