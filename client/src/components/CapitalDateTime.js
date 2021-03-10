import React, { Component } from 'react';

export default class CapitalDateTime extends Component {
  calcTime = (hour) => {
    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      // timezone: 'America/New_York',
      timeZoneName: 'short',
      // timezone: 'UTC+02:00',
      timezone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const resultDate = new Date(+date - hour * 60 * 6e4);
    return resultDate.toLocaleString('en-US', options);
  }

  render() {
    return (
      <div className="">
        { this.calcTime(2)}
      </div>
    );
  }
}
