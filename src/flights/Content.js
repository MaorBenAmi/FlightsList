import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import '../css/mouldifi-core.css';
import Flights from './Flights';
import AddFlight from './AddFlight';
import SideBar from './SideBar';
import { inject } from 'mobx-react';


@inject('FlightsList')
class Content extends Component {
  render() {
    return (
      <div style={{'position':'relative','left':'300px'}}>
      <Switch>
        <Route exact path='/flights' render= {(props) => <Flights FlightsList ={this.props.FlightsList} />} />
        <Route exact path='/add_flight' render= {(props) => <AddFlight FlightsList ={this.props.FlightsList} /> }/>
      </Switch>
      
        <SideBar />
      </div>
    );
  }
}

export default Content;