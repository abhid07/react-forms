import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddressComponent extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div>
                <form className="personal-form">
                    <p>Country : <span>{this.props.country}</span></p>
                    <label>City
                        <input type="text" name="city" value={this.props.city} onChange={this.props.setAddressDetails} />
                    </label>
                    
                    <label>Post code
                        <input type="text" name="postcode" value={this.props.postcode} onChange={this.props.setAddressDetails} />
                    </label>
                  
                    <label>Address
                        <input type="text" name="address" value={this.props.address} onChange={this.props.setAddressDetails} />
                    </label>
                  
                </form>
                <div className="footer-buttons">
                    <button className="previousbtn"><Link to="/BusinessDetails">Back</Link></button>
                    <button className="nextbtn"><Link className="link" to="/AddressDetails">Next</Link></button>
                    <button className="submitbtn"><Link className="link" to="/DisplayComponent">Submit Data </Link></button>
                </div>
            </div>
        )
    }
}
