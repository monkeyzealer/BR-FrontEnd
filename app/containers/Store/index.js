/*
 *
 * Store
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import Avatar from 'material-ui/Avatar';
 import FileFolder from 'material-ui/svg-icons/file/folder';
 import FontIcon from 'material-ui/FontIcon';
 import List from 'material-ui/List/List';
 import ListItem from 'material-ui/List/ListItem';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header'
 import Responsive from 'react-responsive';
 import TextField from 'material-ui/TextField';
 import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';
 import SelectField from 'material-ui/SelectField';
 import MenuItem from 'material-ui/MenuItem';

export default class Store extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      filterProducts:[],
      products:[],
      categories:[],
      user:JSON.parse(sessionStorage.getItem("user")),
      categoryID:0,
    }
  }
  componentWillMount(){
    fetch("http://127.0.0.1:8000/api/getProducts")
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        products:json,
        filterProducts:json
      })
    }.bind(this))
    fetch("http://127.0.0.1:8000/api/getCategories?token="+this.state.token)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        categories:json
      })
    }.bind(this))
  }

  handleCategory = (event, index, value) => {
    var products = this.state.products;
    var newProducts = [];

    this.setState({categoryID:value});
    if(value === null) {
      this.setState({
        filterProducts: products
      })
    }
    else {
      for(var i = 0; i < products.length; i++)
      {
        if(products[i].categoryID === value){
          newProducts.push(products[i]);
        }
      }
      this.setState({
        filterProducts:newProducts
      })
    }
  }

  showMenu = () => {
    const AdminBarLink ={
      marginBottom: "25px"
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

   var createProductLink = <Link style={{marginBottom: '10px', color:'wheat', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'rgb(58, 31, 0)', fontSize:'18px'}} to="/create-product">Create Product</Link>;

   var createCategoryLink = <Link to="/create-category" style={{color:'wheat', textDecoration:'none', fontSize:'18px', border:'1px solid gray', padding:'10px', background:'rgb(58, 31, 0)'}}>Create Category</Link>;

   var deleteCategoryLink = <Link style={{color:'wheat', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'rgb(58, 31, 0)', fontSize:'18px'}} to="/delete-category">Delete Category</Link>;

   var OrdersLink = <Link style={{color:'wheat', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'rgb(58, 31, 0)', fontSize:'18px'}} to="/orders">View Orders</Link>

   var _this = this

   if(this.state.user === null)
   {
    OrdersLink = "";
    createProductLink = "";
    createCategoryLink = "";
    deleteCategoryLink = "";
   }
   else {
     if(this.state.user.roleID !== 1) {
       OrdersLink = "";
       createProductLink = "";
       createCategoryLink = "";
       deleteCategoryLink = "";
     }
   }
return(
  <div>
  <Responsive minDeviceWidth={1024}>
    {createProductLink} {createCategoryLink} {deleteCategoryLink} {OrdersLink} <Link style={{color:'wheat', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'rgb(58, 31, 0)', fontSize:'18px'}} to="/my-orders">My Orders</Link>
  </Responsive>
  <Responsive maxDeviceWidth={1023}>
  <p style={AdminBarLink}>{createProductLink}</p> <p style={AdminBarLink}>{createCategoryLink}</p> <p style={AdminBarLink}> {deleteCategoryLink} </p> <p style={AdminBarLink}> {OrdersLink} </p> <p> <Link style={{color:'wheat', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'rgb(58, 31, 0)', fontSize:'18px'}} to="/my-orders">My Orders</Link></p>
</Responsive>
  </div>
)
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
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const AdminBarLink ={
      marginBottom: "5px"
    };
    const productImage={
      width: "100%",
      height: "250px",
      background: "rgba(255, 255, 255, 0.3)",
      position: "relative",
      padding: "0",
      borderRadius: "0",
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
    const flexGridLi ={
      position: "relative",
      listStyle: "none",
      display: "-webkit-flex",
      display: "flex",
      margin: "0",
      flex: "auto",
      width: "20%",  /* <-- more control */
    };
    const productContent={
      width: "100%",
      height: "auto",
      overflow: "hidden",
      padding: "0.5em"
    };
    const productTitle={
    marginBottom: "0",
    textAlign: "center",
    marginTop: "10px"
    };
    const price={
      textAlign: "center",
    };
    const Product={
      border: "0",
      height: "auto",
      maxWidth: "100%",
    };
    const Productbox={
        backgroundColor: "rgba(58, 31, 0,0.6)",
        width: "24%",
        margin: "0.5em",
        textDecoration: "none",
        color: "wheat",
        border: "1px solid black"
    };
    const AdminBar = {
      color: "wheat !important",
      textAlign: "left",
      paddingLeft: "15px",
      marginTop:"10px"
    }
    const AdminLink = {
      color: "wheat !important",
      textDecoration: "none"
    }
    const ProductboxMobile={
        backgroundColor: "rgba(58, 31, 0,0.6)",
        width: "100%",
        margin: "0.5em",
        textDecoration: "none",
        color: "wheat",
        border: "1px solid black"
    };
    const search={
      marginBottom: "5px",
      border: "1px solid black",
      paddingLeft: "15px",
      paddingRight: "15px",
      width: "250px",
      marginTop:"25px",
      background: "rgba(58, 31, 0, 0.6)",
      paddingBottom: "10px",
      color: "white",
    }
    const searchTitle={
      marginBottom: "5px",
      marginTop: "15px"
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
        <Helmet title="Store" meta={[ { name: 'description', content: 'Description of Store' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
        <div style={main}>
        <div style={AdminBar}>
        {this.showMenu()}
        <div style={search}>
        <h2 style={searchTitle}>Search By:</h2>
        <SelectField
          labelStyle={styles.label1}
          value={this.state.categoryID}
          onChange={this.handleCategory}
          className="Categories"
          style={styles.customWidth}
          >
          <MenuItem value={null} primaryText="All" />
          {this.state.categories.map((category, i) => (
            <MenuItem value={category.id} primaryText={category.category} key={i}/>
          ))}
        </SelectField>
         </div>
        </div>
        <div style={flexGrid}>
        {this.state.filterProducts.map((product,i) => (
          <Link to={`/product/${product.id}`} style={Productbox}>
            <div style={Product}>
              <img
                  src={product.image}
                  style={productImage}
                  className="Product"
                />
            </div>
            <div style={productContent}>
              <h3 style={productTitle}> {product.product} </h3>
              <div style={price}>Price: ${product.price}</div>
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
    <div style={AdminBar}>
    {this.showMenu()}
    <div style={search}>
    <h2 style={searchTitle}>search by:</h2>
    <SelectField
      labelStyle={styles.label1}
      value={this.state.categoryID}
      onChange={this.handleCategory}
      className="Categories"
      style={styles.customWidth}
      >
      {this.state.categories.map((category, i) => (
        <MenuItem value={category.id} primaryText={category.category} key={i}/>
      ))}
    </SelectField>
     </div>
    </div>
    <div style={flexGrid}>
    {this.state.filterProducts.map((product,i) => (
      <Link to={`/product/${product.id}`} style={ProductboxMobile}>
        <div style={Product}>
          <img
              src={product.image}
              style={productImage}
              className="Product"
            />
        </div>
        <div style={productContent}>
          <h3 style={productTitle}> {product.product} </h3>
          <div style={price}>Price: ${product.price}</div>
        </div>
      </Link>
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
