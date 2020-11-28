import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class BusinessDetails extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div>
                <form className="personal-form">
                    <label>Country
                        <select name="country" onChange={this.props.setBusinessDetails} value={this.props.coutry}>
                            <option value="United States Of America">United States Of America</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                            <option value="Japan">Japan</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                        </select>
                    </label>
                    <p>Curency:<span>{this.props.currency}</span></p>
                    <label>IFSC code
                        <input type="text" name="ifsc" onChange={this.props.setBusinessDetails} value={this.props.ifsccode} />
                    </label>
                    <span>{this.props.emailErr}</span>
                    <label>Account Number
                        <input type="text" name="acntno" onChange={this.props.setBusinessDetails} value={this.props.acntNumber} />
                    </label>
                    <span>{this.props.numberErr}</span>
                </form>
                <div className="footer-buttons">
                    <button className="previousbtn"><Link to="/">Back</Link></button>
                    <button className="nextbtn"><Link className="link" to="/AddressDetails">Next</Link></button>
                </div>
            </div>
        )
    }
}
