import React, { Component } from 'react';
import Accounts from './accounts';
import { Link } from 'react-router';

class Header extends Component {
  onBinClick(event) {
    event.preventDefault();

    Meteor.call('bins.insert');
  }
  render () {
    return (
      <nav className="nav navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Wri.tr</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a></li>
            <li><Accounts /></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
