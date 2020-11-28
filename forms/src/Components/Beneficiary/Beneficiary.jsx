import React, { Component } from 'react';
import Personal from './Personal';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Business from './Business';

class Beneficiary extends Component {
    constructor(props)
    {
        super(props)
        
    }
    render() {
        
        return (
            <>
            <div className="beneficiary-buttons">
                <Router>
                    <button id="personal" ><Link to="/">Personal</Link></button>
                    <button id="business"><Link to="/Business">Business</Link></button>
                    <Switch>
                        <Route exact path="/">
                            <Personal {...this.props.personalInfo.error} setValue={this.props.setValue} />
                        </Route>
                        <Route path="/Business" >
                            <Business {...this.props.personalInfo.error} setValue={this.props.setValue}/>
                        </Route>
                    </Switch>
                    
                </Router>
                
            </div>
            <div className="footer-buttons">
                    <button className="nextbtn"><Link className="link" to="/BusinessDetails">Next</Link></button>
            </div>
            </>
        );
    }
}

export default Beneficiary;