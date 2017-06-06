/*
 *
 * Customer
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import Avatar from 'material-ui/Avatar';
 import TextField from 'material-ui/TextField';
 import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';
 import AppBar from 'material-ui/AppBar';
 import FlatButton from 'material-ui/FlatButton';
 import FontIcon from 'material-ui/FontIcon';
 import ActionAndroid from 'material-ui/svg-icons/action/android';
 import RaisedButton from 'material-ui/RaisedButton';
 import FileFolder from 'material-ui/svg-icons/file/folder';
 import List from 'material-ui/List/List';
 import ListItem from 'material-ui/List/ListItem';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header'
 import Responsive from 'react-responsive';
 import Dialog from 'material-ui/Dialog';
 import MenuItem from 'material-ui/MenuItem';

export default class Customer extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
    user:"",
    token:sessionStorage.getItem("token"),
    user:JSON.parse(sessionStorage.getItem("user")),
   }
  }
  componentWillMount(){
    fetch("http://127.0.0.1:8000/api/showUser/" + this.props.params.id, {
      headers:{"Authorization":"Bearer " + this.state.token}
    })
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      console.log(json);
      this.setState({
        user:json
      })
    }.bind(this))
  }
  destroyUser = () =>{
    var _this = this;
    fetch("http://127.0.0.1:8000/api/destroyUser/" + this.props.params.id + "?token=" + this.state.token, {
      method: "post",
      headers:{"Authorization":"bearer "+this.state.token}
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(json.success)
      {
        alert(json.success);
        _this.context.router.push("/roster")
      }
      else if(json.error)
      {
        alert(json.error);
      }
    })
  }
  showMenu = () => {
    const update={
      textAlign: "center"
    }
    const delButton={
      border: "0",
      color: "wheat",
      background: "rgb(58, 31, 0)",
      padding: "5px",
      paddingLeft: "20px",
      paddingRight: "20px",
      textDecoration: "none",
      fontSize: "16px",
    }
    const deleteLink ={
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "15px"
    };
  const styles = {
  customWidth: {
    width: 200,
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
    color: "wheat !important",
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
  color: "wheat !important",
  },
  button2: {
  margin: 12,
  backgroundColor: brown900,
  },
  label1: {
  color: "wheat",
  },
  floatlabel1: {
  color: "wheat !important",
  border: "1px solid black important",
  },
  };

   var deleteUser = <button style={delButton} onTouchTap={this.destroyUser}>Delete</button>;

   var _this = this

   if(this.state.user === null)
   {
    deleteUser = "";
   }
   else {
     if(this.state.user.roleID !== 1) {
      deleteUser = <button style={delButton} onTouchTap={this.destroyUser}>Delete</button>;
     }
   }
   return(
     <div>
       <p style={deleteLink}>{deleteUser}</p>
     </div>
   )
 }
  render() {
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    };
    const customContentStyle = {
      width: '30%',
      maxWidth: 'none',
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
    };
    const productContent={
      marginTop: "0",
      paddingLeft: "10px",
      paddingRight: "10px",
      maxWidth: "100%",
      marginBottom: "0",
      fontSize: "20px",
    }
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const productHeader ={
      width: "100%",
      marginTop: "0px",
      marginBottom: "0.5em",
      textAlign: "center",
      borderBottom: "2px solid wheat",
      borderTop: "2px solid wheat",
      background: "rgb(58, 31, 0)",
      paddingBottom: "5px",
      paddingTop: "5px",
    }
    const imagePost={
      width:"auto",
      maxWidth: "300px",
      height:"auto",
      marginBottom: "0",
      maxHeight: "250px",
      textAlign: "center",
    }
    const imagePostContainer ={
      width: "100%",
      marginTop: "20px",
      textAlign: "center",
      justifyContent: "center",
      minHeight: "150px",
    }
    const Content={
      width: "100%",
      margin: "0 auto",
      maxWidth: "350px",
      color: "wheat",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
      paddingBottom: "30px",
      background: "rgba(58, 31, 0,0.6)",
      border: "1px solid black"
    }
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
        <Helmet title="Customer" meta={[ { name: 'description', content: 'Description of Customer' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
          <div style={main}>
          <div style={Content}>
            <div style={imagePostContainer}>
              <img style={imagePost} src={this.state.user.image} />
            </div>
            <h1 style={productHeader}>{this.state.user.username}</h1>
            <p style={productContent}><b>Name:</b> {this.state.user.name}</p>
            <p style={productContent}><b>Email:</b> {this.state.user.email}</p>
            <p style={productContent}><b>Phone:</b> {this.state.user.phone}</p>
            <p style={productContent}><b>Address:</b> {this.state.user.address}</p>
            <p style={productContent}><b>Bio:</b><br />{this.state.user.bio}</p>
            <p style={update}><Link style={edit} to={`/update-user/${this.state.user.id}`}>Edit</Link></p>
            {this.showMenu()}
            </div>
          </div>
        </main>
      </Responsive>
      <Responsive maxDeviceWidth={1023}>
      <main style={mainContainer}>
        <div style={main}>
          <div style={imagePostContainer}>
            <img style={imagePost} src={this.state.user.image} />
          </div>
          <h1 style={productHeader}>{this.state.user.username}</h1>
          <div style={Content}>
          <p style={productContent}><b>Name:</b> {this.state.user.name}</p>
          <p style={productContent}><b>Email:</b> {this.state.user.email}</p>
          <p style={productContent}><b>Phone:</b> {this.state.user.phone}</p>
          <p style={productContent}><b>Address:</b> {this.state.user.address}</p>
          <p style={productContent}><b>Bio:</b><br />{this.state.user.bio}</p>
          <p style={update}><Link style={edit} to={`/update-user/${this.state.user.id}`}>Edit</Link></p>
          </div>
        </div>
      </main>
    </Responsive>
        <Footer style={footerStyle} />
      </div>
    );
  }
}
Customer.contextTypes = {
  router: React.PropTypes.object
};
