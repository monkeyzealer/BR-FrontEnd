/*
 *
 * CreateCategory
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
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

export default class CreateCategory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      category:"",
      token:sessionStorage.getItem("token")
    }
  }
  handleCategory = (event) => {
    this.setState({
      category:event.target.value

    })
    console.log(this.state.subject);
  }
  storeCategory = () => {
    var _this = this;
    var data = new FormData();
    data.append("category", this.state.category);

    fetch("http://boxrobot.codemonkeytestsites.com/api/storeCategory?token="+this.state.token, {
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
          category:"",
        })
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
      justifyContent: "center"
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const Title={
      marginBottom: "0",
      paddingTop: "5px",
      width: "50%",
      fontWeight: "bold",
      marginTop: "0"
    };
    const contentBox={
      marginBottom: "0",
      marginTop: "2px",
      width: "100%",
      height: "45px",
    };
    const h2title={
      paddingTop: "0",
      marginTop: "0",
      marginBottom: "5px",
      paddingBottom: "5px",
      borderBottom: "2px solid #3A1F00",
    };
    const formContainer={
      width:"90%",
      maxWidth:"300px",
      margin: "0 auto",
      background: "rgba(111, 78, 55, 0.8)",
      padding: "20px",
      color: "white"
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
        textIndent: "10px",
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
    return (
      <div style={Container}>
        <Helmet title="CreateCategory" meta={[ { name: 'description', content: 'Description of CreateCategory' }]}/>
        <Header />
        <main style={mainContainer}>
          <div style={main}>
            <div style={formContainer}>
            <h2 style={h2title}>Create Category</h2>
            <p style={Title}>Category Name:</p>
            <TextField
            onChange={this.handleCategory}
            value={this.state.category}
            style={contentBox}
            hintText="&nbsp;"
            hintStyle={styles.hintStyle}
            inputStyle={styles.inputStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
            />
            <br />
            <RaisedButton style={styles.button} type="submit"
            backgroundColor="rgb(58, 31, 0)"
            labelColor="wheat"
             onTouchTap={this.storeCategory} label="Submit"
            className="button-submit"  />
          </div>
        </div>
      </main>
      <Footer style={footerStyle} />
      </div>
    );
  }
}
