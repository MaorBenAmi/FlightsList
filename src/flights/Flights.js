import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FlightInfo from './FlightInfo';
import EmptyFlights from './EmptyFlights';
import {Table,responsive } from 'react-bootstrap';
@inject('FlightsList')
@observer
class Flights extends Component {
constructor(props) {
    super(props);
    this.state = {
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }


handleSubmit(pEvent){
    pEvent.preventDefault();
    let aNewFlight = {
        from : this.from.value,
        to: this.to.value,
        departureTime: this.departureTime.value,
        landingTime: this.landingTime.value,
        price: this.price.value
    };
    
    this.props.FlightsList.addFlight(aNewFlight);
    pEvent.target.reset();
}


  render() {
      
      if(this.props.FlightsList.flightsCount == 0){
          return (
            <div>     
                <EmptyFlights />
          </div>
          );
      } else {
          
        return (
          <div>     
            
            
            <Table responsive >
              <thead>
                <tr>
                  <th>#</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Departure Time</th>
                <th>Landing Time</th>
                <th>Price</th>

                </tr>
              </thead>
            
            {this.props.FlightsList.flights.map(flight => 
                <FlightInfo flight={flight} />
            )}
            </Table>
          </div>
        );
    }
      

  }
}

export default Flights;