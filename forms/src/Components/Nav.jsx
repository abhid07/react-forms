import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
            <div className="header-container">
                <div className="header-container">
                        <button><Link to="/">1</Link></button>
                        <button><Link to="/BusinessDetails">2</Link></button>
                        <button><Link to="/AddressDetails">3</Link></button>
                </div>
            </div>
            <hr style={{margin:"30px"}}/>
            </div>
        );
    }
}

export default Nav;