import { observable, action, computed } from 'mobx';

class FlightsList {
  @observable flights = [];

  @action
  addFlight = (flight) => {
    this.flights.push(flight);
  };

  @computed
  get flightsCount() {
    return this.flights.length;
  }
}

const singleton = new FlightsList();
export default singleton;