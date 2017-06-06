/*
 *
 * MyOrders
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header'
 import Responsive from 'react-responsive';
 import Dialog from 'material-ui/Dialog';
 import TextField from 'material-ui/TextField';
 import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';
 import AppBar from 'material-ui/AppBar';
 import FlatButton from 'material-ui/FlatButton';
 import FontIcon from 'material-ui/FontIcon';
 import ActionAndroid from 'material-ui/svg-icons/action/android';
 import RaisedButton from 'material-ui/RaisedButton';
 import FileFolder from 'material-ui/svg-icons/file/folder';

export default class MyOrders extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      orders:[],
      products:[],
      user:JSON.parse(sessionStorage.getItem("user")),
      token:sessionStorage.getItem("token"),
      open:false,
      activeOrder: "",
      comment: "",
      amount: 0,
    }
  }
  componentWillMount(){
    fetch("http://boxrobot.codemonkeytestsites.com/api/showUserOrders?token=" + this.state.token,{
      headers:{"Authorization":"Bearer "+this.state.token}
    })
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        orders:json
      })
    }.bind(this))

    fetch("http://boxrobot.codemonkeytestsites.com/api/getProducts")
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        products:json
      })
    }.bind(this))
  }
  handleOpen = (order) => {
    this.setState({
      open: true,
      activeOrder: order,
      amount:order.amount,
      comment:order.comment
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };
  updateOrder = () =>{
    var _this = this
    var data = new FormData();
    data.append("productID", this.state.activeOrder.productID) /* i dont think i need this */
    data.append("amount", this.state.amount)
    data.append("comment", this.state.comment)

    fetch("http://boxrobot.codemonkeytestsites.com/api/updateOrder/"+this.state.activeOrder.id+"?token="+this.state.token,
  {
    method:"post",
    body:data,
    headers:{"Authorization":"bearer"+this.state.token}
  })
  .then(function(res){
    return res.json()
  })
  .then(function(json){
    if(json.error){
      alert(json.error);
    }
    else if (json.success) {
      alert("Success! Your order has been updated and now your Total is $"+json.total);
      window.location.reload();
      _this.setState({
        amount:"",
        comment:"",
      })
    }
  })
  }
  destroyOrder = (id) =>{
    var _this = this;
    fetch("http://boxrobot.codemonkeytestsites.com/api/destroyOrder/" + id + "?token=" + this.state.token, {
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
        window.location.reload();
      }
      else if(json.error)
      {
        alert(json.error);
      }
    })
  }
  handleAmount = (event) => {
    this.setState({
      amount:event.target.value

    })
    console.log(this.state.amount);
  }
  handleOrderComment = (event) => {
    this.setState({
      comment:event.target.value

    })
    console.log(this.state.comment);
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
      alignItems: "center",
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const productImage={
      width: "100%",
      height: "250px",
      background: "rgba(255, 255, 255, 0.3)",
      position: "relative",
      padding: "0",
      borderRadius: "0",
    }
    const customContentStyle = {
      width: '30%',
      maxWidth: 'none',
    };
    const orderContent={
      width: "100%",
      height: "auto",
      overflow: "hidden",
    };
    const orderInfo={
      textAlign: "center",
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
    const productTitle={
    marginBottom: "10px",
    textAlign: "center",
    marginTop: "10px",
    borderBottom: "2px solid black",
    paddingBottom: "5px",
    };
    const price={
      textAlign: "center",
    };
    const Product={
      border: "0",
      height: "auto",
      maxWidth: "100%",
    };
    const orderBox={
        backgroundColor: "rgba(58, 31, 0,0.6)",
        width: "24%",
        margin: "0.5em",
        textDecoration: "none",
        color: "wheat",
        border: "1px solid black"
    };
    const formContainer={
      padding: "15px",
      fontWeight: "bold",
      color: "black"
    };
    const amountNumber={
      background: "rgba(0, 0, 0, 0.3)",
      marginLeft: "5px",
      color: "black",
      padding: "5px",
    }
    const EditBox={
      width:"100%",
      marginTop: "15px"
    }
    const Edit={
      display: "flex",
      alignSelf:"center"
    }
    const orderBoxMobile={
        backgroundColor: "rgba(58, 31, 0,0.6)",
        width: "100%",
        margin: "0.5em",
        textDecoration: "none",
        color: "wheat",
        border: "1px solid black"
    };
    const orderCommentBox={
      marginBottom: "0",
      marginTop: "0",
      width: "100%",
      height: "265px",
      maxHeight:"265px",
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
const actions = [
<FlatButton
  label="Cancel"
  primary={true}
  onTouchTap={this.handleClose}
/>,
<FlatButton
  label="Submit"
  primary={true}
  onTouchTap={this.updateOrder}
/>,
];
const Title={
marginBottom: "0",
paddingTop: "5px",
width: "50%",
fontWeight: "bold",
marginTop: "0"
};
const update={
margin: '0 auto'

}
const del={
margin: '10px auto',
display: "flex"
}
const flexGridMobile ={
  padding: "0",
  display: "-webkit-flex",
  display: "flex",
  flexWrap: "wrap",
  width: "95%",
  marginBottom: "20px"
};
    return (
      <div style={Container}>
        <Helmet title="MyOrders" meta={[ { name: 'description', content: 'Description of MyOrders' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
        <div style={main}>
        <div style={flexGrid}>
        {this.state.orders.map((order,i) => (
          <div style={orderBox}>
            <div style={orderContent}>
              <h2 style={productTitle}> {order.product}</h2>
              <div style={orderInfo}>
              <div> Bought by <b>{order.name}</b> </div>
              <div><b>Amount:</b> {order.amount} </div>
              <div><b>TotalPrice:</b> ${order.totalPrice}</div>
              <div><b>Comment:</b> {order.comment}</div>
              <div style={EditBox}>
              <div style={Edit}>
              <p style={update}><RaisedButton label="Edit Order"
              backgroundColor="rgb(58, 31, 0)"
              labelColor="wheat"
              onTouchTap={() => this.handleOpen(order)} /></p>
              <Dialog
                title={this.state.activeOrder.product}
                actions={actions}
                modal={true}
                contentStyle={customContentStyle}
                open={this.state.open}
                actionsContainerStyle={{textAlign:'center'}}
              >
              <div style={formContainer}>
              <p style={Title}>Amount:</p>
              <input type="number" name="quantity" min="1" max={this.state.activeOrder.stock} value={this.state.amount} onChange={this.handleAmount} style={amountNumber} ></input>
              <p style={Title}>Comment:</p>
                <TextField style={orderCommentBox}
                  onChange={this.handleOrderComment}
                  value={this.state.comment}
                  multiLine={true}
                  rows={10}
                  textareaStyle={styles.textareaStyle}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />
              </div>
              </Dialog>
              </div>
              </div>
              <p style={del}><RaisedButton label="Delete Order"
              backgroundColor="rgb(58, 31, 0)"
              labelColor="wheat"
              style={{display: 'flex', alignSelf: 'center', margin: '0 auto', marginBottom: '5px'}}
              onTouchTap={()=>this.destroyOrder(order.id)}/></p>
              </div>
            </div>
          </div>
          ))}
        </div>
        </div>
        </main>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
        <main style={mainContainer}>
        <div style={main}>
        <div style={flexGridMobile}>
        {this.state.orders.map((order,i) => (
        <div style={orderBoxMobile}>
        <div style={orderContent}>
          <h3 style={productTitle}> {order.product}</h3>
          <div style={orderInfo}>
          <div> Bought by <b>{order.name}</b> </div>
          <div><b>Amount:</b> {order.amount} </div>
          <div><b>TotalPrice:</b> ${order.totalPrice}</div>
          <div><b>Comment:</b> {order.comment}</div>
          <div style={EditBox}>
          <div style={Edit}>
          <p style={update}><RaisedButton label="Edit Order"
          backgroundColor="rgb(58, 31, 0)"
          labelColor="wheat"
          onTouchTap={() => this.handleOpen(order)} /></p>
          <Dialog
            title={this.state.activeOrder.product}
            actions={actions}
            modal={true}
            contentStyle={customContentStyle}
            open={this.state.open}
            actionsContainerStyle={{textAlign:'center'}}
          >
          <div style={formContainer}>
          <p style={Title}>Amount:</p>
          <input type="number" name="quantity" min="1" max={this.state.activeOrder.stock} value={this.state.amount} onChange={this.handleAmount} style={amountNumber} ></input>
          <p style={Title}>Comment:</p>
            <TextField style={orderCommentBox}
              onChange={this.handleOrderComment}
              value={this.state.comment}
              multiLine={true}
              rows={10}
              textareaStyle={styles.textareaStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
            />
          </div>
          </Dialog>
          </div>
          </div>
          <p style={del}><RaisedButton label="Delete Order"
          backgroundColor="rgb(58, 31, 0)"
          labelColor="wheat"
          style={{display: 'flex', alignSelf: 'center', margin: '0 auto', marginBottom: '5px'}}
          onTouchTap={()=>this.destroyOrder(order.id)}/></p></div>
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
