import React, { Component } from 'react'; // react -> all react related, like component and life cycle
import spacex_logo from '../assets/images/spacex_logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img  src={spacex_logo}
              className="App-logo"
              alt="logo"></img>
        <p className="title">
          Starlink Tracker
        </p>
      </header>
    );
  }
}

export default Header;