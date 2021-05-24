import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 10
  }

  componentDidMount() {
    this.mounted = true;
    const { numberOfEvents } = this.state;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, numberOfEvents), locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  render() {
    return (
      <div className='App'>
      <h1>MEET_APP</h1>
      <div>
        <h4>Enter the name of CITY here : </h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      </div>
      <div>
        <h4>Show </h4> <NumberOfEvents/> <h4> Events</h4>
      </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
