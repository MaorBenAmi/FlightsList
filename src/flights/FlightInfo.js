import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class FlightInfo extends Component {
constructor(props) {
    super(props);
    
  }


  render() {
    return (
        <div>
      <tr>     
              <td>{this.props.flight.from}</td>  
              <td>{this.props.flight.to}</td>  
              <td>{this.props.flight.departureTime}</td>  
              <td>{this.props.flight.landingTime}</td>  
              <td>{this.props.flight.price}</td>  
        </tr>
      </div>
    );
  }
}

export default FlightInfo;