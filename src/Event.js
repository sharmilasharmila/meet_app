import React, { Component } from 'react';

class Event extends Component {
  state = {
    showHideDetails: false,
  };

  handleShowHideButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className='container'>
        <h1>{event.summary}</h1>
        <p>{event.start.dateTime}</p>
        <p className='locations'>{event.location}</p>

        {this.state.showHideDetails && (
          <div className='details'>
            <h2>About event:</h2>
            <a href={event.htmlLink}>See Details on Google Calendar</a>
            <p>{event.description}</p>
          </div>
        )}

        <button
          className='btnShowHide'
          onClick={() => this.handleShowHideButton()}
        >
          {!this.state.showHideDetails ? 'More Information' : 'Collapse'}
        </button>
      </div>
    );
  }
}
export default Event;