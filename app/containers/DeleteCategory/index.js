/*
 *
 * DestoryCategory
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


export default class DeleteCategory extends React.PureComponent {
  constructor(props)
  {
    super(props);
    this.state={
      categoryID: "",
      categories:[],
      token: sessionStorage.getItem("token"),
      user:JSON.parse(sessionStorage.getItem("user"))
    }
  }
  componentWillMount(){
    fetch("http://boxrobot.codemonkeytestsites.com/api/getCategories?token="+this.state.token)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        categories:json
      })
    }.bind(this))
  }
handleCategory = (event, index, value) => this.setState({categoryID:value});

destroyCategory = () =>{
  var _this = this;
  fetch("http://boxrobot.codemonkeytestsites.com/api/destroyCategory/" + this.state.categoryID + "?token=" + this.state.token, {
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
      _this.context.router.push("/store");
    }
    else if(json.error)
    {
      alert(json.error);
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
    const h2title={
      paddingTop: "0",
      marginTop: "0",
      marginBottom: "5px",
      paddingBottom: "5px",
      borderBottom: "2px solid #3A1F00",
    };
    const categories = {
      border: "1px solid lightgray",
      marginTop: "10px",
      width: "90%",
      padding: "15px",
      paddingTop: "0",
      background: "rgba(0, 0, 0, 0.3)",
    }
    const formContainer={
      width:"90%",
      maxWidth:"300px",
      margin: "0 auto",
      background: "rgba(111, 78, 55, 0.8)",
      padding: "20px",
      color: "white"
    };
    const categoryTitle={
      marginBottom: "5px",
    }
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
    marginBottom: "0",
    color: "white",
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
height: "40px",
paddingLeft: "10px",
position: "initial",
lineHeight: "48px",
fontWeight: "bold",
backgroundColor:"rgb(162, 124, 75)",
border: "1px solid lightgray"
},
floatlabel1: {
color: "wheat !important",
border: "1px solid black important",
},
};
    return (
      <div style={Container}>
        <Helmet title="DestoryCategory" meta={[ { name: 'description', content: 'Description of DestoryCategory' }]}/>
        <Header />
        <main style={mainContainer}>
          <div style={main}>
            <div style={formContainer}>
              <h2 style={h2title}>Delete Category</h2>
              <div style={categories}>
              <h4 style={categoryTitle}>Categories:</h4>
              <SelectField
                labelStyle={styles.label1}
                value={this.state.categoryID}
                onChange={this.handleCategory}
                style={styles.customWidth}
                className="Categories"
                >
                {this.state.categories.map((category, i) => (
                  <MenuItem value={category.id} primaryText={category.category} key={i}/>
                ))}
              </SelectField>
              </div>
              <br />
              <button style={{backgroundColor: 'rgb(58, 31, 0)', color: 'wheat', padding: '10px', border:'1px solid gray'}} onTouchTap={this.destroyCategory}>Delete Category</button>
            </div>
        </div>
      </main>
      <Footer style={footerStyle} />
      </div>
    );
  }
}
DeleteCategory.contextTypes = {
  router: React.PropTypes.object
};
