/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import {blue500, wheat500, greenA200} from 'material-ui/styles/colors';

class NavBar extends React.PureComponent {
  constructor(props)
  {
      super(props);
      this.state = {
        menuOpen:false,
        siteName:"http://localhost:3000",
        user:JSON.parse(sessionStorage.getItem("user"))
      }
    }
    componentWillMount()
    {
      console.log(this.state.user);
    }
    handleMenu = () => {
      if(this.state.menuOpen == false)
      {
        this.setState({
          menuOpen:true
        })
      }
      else if(this.state.menuOpen == true)
      {
        this.setState({
          menuOpen:false
        })
      }
    }

    showMenu = () => {
      const navLink = {
        padding:"5px",
        border: "1px solid white",
        background: "burlywood",
        textDecoration: "none",
        fontWeight: "bold",
        color: "#3A1F00"
      }
      const nav = {
        display:"flex",
        flexDirection:"column",
        alignSelf:'center',
        textAlign:"center",
        padding: "0",
        margin: "5px auto",
        marginBottom: "15px"
      }

      var storeLink = <Link activeStyle={{color:'wheat'}} to="/store" style={navLink}>Store</Link>;

      var signOutLink = <Link activeStyle={{color:'wheat'}} onTouchTap={() => this.signOut()} style={navLink}>Sign Out</Link>;

      var registerLink = "";

      var signInLink = "";

      var _this = this

      if(this.state.user === null)
      {
        storeLink = "";
        signOutLink = "";
        signInLink = <Link activeStyle={{color:'wheat'}} to="/SignIn" style={navLink}>Sign In</Link>;
        registerLink = <Link activeStyle={{color:'wheat'}} to="/signup" style={navLink}>Register</Link>;
      }
      //if user is logged in it will show the sign out links
      else
        {
        signInLink = "";
        registerLink = "";
        }

    if(this.state.menuOpen == true)
    {
      return(
        <nav style={nav}>
        <Link activeStyle={{color:'wheat'}} to="/" style={navLink}>Home</Link>
        <Link activeStyle={{color:'wheat'}} to="/roster" style={navLink}>Roster</Link>
        {storeLink}
        {signOutLink}
        {registerLink}
        {signInLink}
        </nav>
      )
    }
  }
  signOut = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
  alert("Good bye and Come Again");
  this.context.router.push("/");
  }
  render() {
    const navLink={
      padding: "5px",
      textDecoration: "none",
      fontWeight: "bold",
      color: "#3A1F00",
      fontSize: "20px"
    }
    const navBar = {
      textAlign:"center",
      width: "300px"
    }
    const navBarMobile = {
    width: "300px"
    }
    const nav = {
      content: "",
      clear: "both",
      display: "table",
    }
    const navMobile = {
      content: "",
      clear: "both",
      display: "table",
      margin: "0 auto",
      textAlign:"center",
    }
    const titleStyle = {
      fontSize:"3em",
      fontVariant:"small-caps",
      color: "white",
    };

    const styles = {
      iconStyle: {
        color: "#C8B560",
      },
    };

    var storeLink = <Link activeStyle={{color:'wheat'}} to="/store" style={navLink}>Store</Link>;

    var signOutLink = <Link activeStyle={{color:'wheat'}} onTouchTap={() => this.signOut()} style={navLink}>Sign Out</Link>;

    var signInLink = "";

    var registerLink = "";

    //if user isnt logged in it will show the sign in link
    if(this.state.user === null)
    {
      storeLink = "";
      signOutLink = "";
      signInLink = <Link activeStyle={{color:'wheat'}} to="/SignIn" style={navLink}>Sign In</Link>;
      registerLink = <Link activeStyle={{color:'wheat'}} to="/signup" style={navLink}>Register</Link>;
    }
    //if user is logged in it will show the sign out links
    else
      {
      signInLink = "";
      registerLink = "";
      }

    return (
      <div>
        <Responsive minDeviceWidth={1024}>
            <nav style={nav}>
                <Link activeStyle={{color:'wheat'}} to="/" style={navLink}>Home</Link>
                <Link activeStyle={{color:'wheat'}} to="/roster" style={navLink}>Roster</Link>
                {storeLink}
                {signOutLink}
                {registerLink}
                {signInLink}
            </nav>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <nav style={navBar}>
            <div>{this.props.chicken}</div>
            <nav>
              <IconButton
                iconStyle={styles.iconStyle}
                onTouchTap={this.handleMenu}>
                <Menu/>
              </IconButton>
            </nav>
          </nav>
          {this.showMenu()}
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
