import React, { Component } from 'react';
import Login from './flights/Login';
import { Provider } from 'mobx-react';
import FlightsList from './flights/FlightsList';
import Content from './flights/Content';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      is_logged_in:false
  };

    this.onLogin = this.onLogin.bind(this);
  }
    
    onLogin(pIsLoggedIn){
      this.setState({is_logged_in:pIsLoggedIn});
    }

  render() {
    if(!this.state.is_logged_in){
      return (
          <div>
          <Login callBack_click={this.onLogin}/>
          </div>
        );
    } else {
        return (
      <Provider FlightsList={FlightsList}>
        <Content />
      </Provider>
        );
    }

  
  }
}

export default App;
