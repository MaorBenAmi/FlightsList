import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Alert }from 'react-bootstrap';

@inject('FlightsList')
@observer
class AddFlight extends Component {
constructor(props) {
    super(props);
    this.state = {
         show_alert:false,
      alert_class:'',
      alert_text:''
    }
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
    
              this.showAlert('success','flight added successfully');

    pEvent.target.reset();
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
        <h2>You have {this.props.FlightsList.flightsCount} flights</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="from" name="flight" ref={input => (this.from = input)} />
            <input type="text" placeholder="to" name="flight" ref={input => (this.to = input)} />
            <input type="text" placeholder="departureTime" name="flight" ref={input => (this.departureTime = input)} />
            <input type="text" placeholder="landingTime" name="flight" ref={input => (this.landingTime = input)} />
            <input type="text" placeholder="price" name="flight" ref={input => (this.price = input)} />
           <input type="submit" value="Add flight"  className="registerbtn"/>
        </form>

        <Alert bsStyle={this.state.alert_class} >
            {this.state.alert_text}
          </Alert>
      </div>
    );
  }
}

export default AddFlight;