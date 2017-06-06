/*
 *
 * UpdateUser
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

export default class UpdateUser extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
    email: "",
    password: "",
    username: "",
    name: "",
    image: "",
    address: "",
    phone: "",
    preview:"",
    bio:"",
    token:sessionStorage.getItem("token")
   }
  }
  componentWillMount(){
    fetch("http://boxrobot.codemonkeytestsites.com/api/showUser/" + this.props.params.id,{
      headers: {
        "Authorization":"Bearer " + this.state.token
      }
    })
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        username:json.username,
        image:json.image,
        password:json.password,
        name: json.name,
        email: json.email,
        phone:json.phone,
        address:json.address,
        bio:json.bio,
        preview:json.image,
      })
    }.bind(this))
}
  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleUserName = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleImage = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  }
  handleAddress = (event) => {
    this.setState({
      address: event.target.value
    })
  }
  handlePhone = (event) => {
    this.setState({
      phone: event.target.value
    })
  }
  handleBio = (event) => {
    this.setState({
      bio: event.target.value
    })
  }
  updateUser = () => {
    var _this = this;
    var data = new FormData();
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("username", this.state.username);
    data.append("name", this.state.name);
    data.append("image", this.state.image);
    data.append("address", this.state.address);
    data.append("phone", this.state.phone);
    data.append("bio", this.state.bio);

    fetch("http://boxrobot.codemonkeytestsites.com/api/UpdateUsers/"+this.props.params.id+"?token="+this.state.token,
    {
      method:"post",
      body: data,
      headers: {"Authorization":"bearer "+this.state.token}
    })
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      if(json.error){
        alert(json.error);
      }
      else if (json.success) {
        alert(json.success);
        _this.setState({
          email:"",
          password:"",
          username:"",
          name:"",
          image:"",
          phone:"",
          bio:"",
          address:"",
          preview:"",
        })
        _this.context.router.push("/roster");
      }
    })
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
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const userNameBox={
      width: "95%",
      height: "45px",
    };
    const userNameTitle={
      width: "300px",
      fontWeight: "bold",
      marginBottom: "0",
    };
    const emailBox={
      width: "95%",
      height: "45px",
    };
    const emailTitle={
      paddingTop: "0",
      width: "100%",
      fontWeight: "bold",
      marginBottom: "0",
    };
    const passwordBox={
      width: "95%",
      height: "45px",
    };
    const passwordTitle={
      paddingTop: "0",
      width: "100%",
      fontWeight: "bold",
      marginBottom: "0",
    };
    const h2title={
      paddingTop: "0",
      marginTop: "0",
      textAlign: "center"
    };
    const formContainer={
      width:"90%",
      maxWidth:"800px",
      margin: "0 auto",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(111, 78, 55, 0.8)",
      padding: "20px",
      color: "white"
    };
    const preview={
      maxWidth: "90%",
      maxHeight: "90%",
    };
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
        textIndent: "10px"
      },
      textareaStyle: {
        background: "rgba(0, 0, 0, 0.3)",
        marginTop: "0",
        paddingLeft: "10px",
        paddingRight: "10px",
        height: "258px",
        paddingTop: "5px",
        paddingBottom: "5px",
        marginBottom: "0",
        color: "white",
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
      backgroundColor: "rgb(58, 31, 0)",
      color: "red !important",
    },
    button2: {
    margin: 12,
    backgroundColor: "#3A1F00",
    color: "wheat"
  },
  label1: {
    color: "red"
  },
  floatlabel1: {
    color: "red !important",
    border: "1px solid black important",
  },
};
const bioBox={
  marginBottom: "0",
  marginTop: "0",
  width: "100%",
  height: "265px",
  maxHeight:"275px",
  color: "white",
};
    return (
      <div style={Container}>
        <Helmet title="UpdateUser" meta={[ { name: 'description', content: 'Description of UpdateUser' }]}/>
        <Header />
        <main style={mainContainer}>
          <div style={main}>
          <div style={formContainer}>
          <h2 style={h2title}>Update User Info</h2>
          <p style={emailTitle}>Email:</p>
          <TextField
            style={emailBox}
            onChange={this.handleEmail}
            value={this.state.email}
            hintText="&nbsp;"
            hintStyle={styles.hintStyle}
            inputStyle={styles.inputStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
          />
            <p style={userNameTitle}>User Name:</p>
            <TextField
              style={userNameBox}
              onChange={this.handleUserName}
              hintText="&nbsp;"
              value={this.state.username}
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
            />
            <p style={userNameTitle}>Name:</p>
            <TextField
              style={userNameBox}
              onChange={this.handleName}
              value={this.state.name}
              hintText="&nbsp;"
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
            />
            <br />
            <p style={userNameTitle}>User Avatar:<br />
            <RaisedButton
              backgroundColor="rgb(58, 31, 0)"
              label="Choose an Image"
              labelPosition="before"
              labelColor="wheat"
              style={styles.uploadButton}
              style={styles.button}
              containerElement="label"
              >
            <input type="file" onChange={(e) => this.handleImage(e)}  style={styles.uploadInput} />
            </RaisedButton>
            </p>
            <center><img style={preview} src={this.state.preview} /></center>
            <br />
            <p style={userNameTitle}>Address:</p>
            <TextField
              style={userNameBox}
              onChange={this.handleAddress}
              value={this.state.address}
              hintText="&nbsp;"
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
            />
            <p style={userNameTitle}>Phone Number:</p>
            <TextField
              style={userNameBox}
              onChange={this.handlePhone}
              value={this.state.phone}
              hintText="&nbsp;"
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
            />
            <p style={passwordTitle}>Password:</p>
            <TextField
              style={passwordBox}
              onChange={this.handlePassword}
              value={this.state.password}
              hintText="&nbsp;"
              type="password"
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
            />
            <p style={userNameTitle}>Bio:</p>
              <TextField style={bioBox}
                onChange={this.handleBio}
                value={this.state.bio}
                multiLine={true}
                rows={10}
                textareaStyle={styles.textareaStyle}
                underlineStyle={styles.underlineStyle}
                underlineFocusStyle={styles.underlineFocusStyle}
              />
            <br />
            <center>
            <RaisedButton  type="submit"
            backgroundColor="#3A1F00"
            onTouchTap={this.updateUser}
            label="Submit"
            labelColor="wheat"
            style={styles.button2}
            className="button-submit"
             /></center>
          </div>
        </div>
      </main>
      <Footer style={footerStyle} />

      </div>
    );
  }
}
UpdateUser.contextTypes = {
  router: React.PropTypes.object
};
