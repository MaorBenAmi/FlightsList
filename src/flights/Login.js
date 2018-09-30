import React, { Component } from 'react';
import { Alert }from 'react-bootstrap';
import '../css/index.css'
import '../css/mouldifi-core.css';


class Login extends Component {
constructor(props) {
    super(props);
    this.state = {
      is_logged_in:this.props.is_logged_in,
      user_name:'',
      password:'',
      login_url:'https://api-tournment-users.onecodeapps.com',
      show_spinner:false
    };

    this.onTypePassword = this.onTypePassword.bind(this);
    this.onTypeUserName = this.onTypeUserName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValueEmpty = this.isValueEmpty.bind(this);
  }


    onTypePassword(event){
    this.setState({password:event.target.value});
    }

    onTypeUserName(event){
    this.setState({user_name:event.target.value});

    }

  handleSubmit(event) {
    event.preventDefault();
      
      if(this.isValueEmpty(this.state.user_name)){
          this.showAlert('warning','username may not be empty');
          return;
      }
   
    if(this.isValueEmpty(this.state.password)){
          this.showAlert('warning','password may not be empty');
          return;
      }
 
     this.props.callBack_click(true);
    
  }
    
    isValueEmpty(pValue){
       if(pValue == null || pValue == ""){
           return true;
       } 
        return false;
    }



showAlert(pClassName, pText) {
        this.setState({
            show_alert:true,
            alert_class:pClassName,
            alert_text:pText
          });    
    setTimeout(function() { this.setState({show_alert: false}); }.bind(this), 3000);
  }


  render() {
    return (
      <div>
        <div className='box-content' style={{'position':'absolute','left':'21%','top':'60px','width':'50%'}}>
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <p>Please login to continue</p>
            <label ><b>user name</b></label>
            <input type="text" name="username" placeholder="username" onChange={this.onTypeUserName} />

            <label><b>password</b></label>
            <input type="password" placeholder="Password" name="password" onChange={this.onTypePassword} />
            <input type="submit" value="Login"  className="registerbtn"/>
          </form>
          <div style={{ 'display': this.state.show_alert ? 'inline' : 'none'}}>
          <Alert bsStyle={this.state.alert_class} >
            {this.state.alert_text}
          </Alert>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;
