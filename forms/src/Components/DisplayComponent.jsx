import React, { Component } from 'react'

export default class DisplayComponent extends Component {
    constructor(props)
    {
        super(props)
        console.log(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="display-container">
                <div className="personalData">
                <h1>Personal Data</h1>
                <p>Name : {this.props.personalInfo.firstName}</p>
                <p>Last Name :{this.props.personalInfo.lastName}</p>
                <p>Email :{this.props.personalInfo.email}</p>
                <p>Number :{this.props.personalInfo.number}</p>
                </div>

                <div className="personalData">
                <h1>Business Data</h1>
                <p>Business Name :{this.props.personalInfo.bname}</p>
                <p>Business Email :{this.props.personalInfo.bemail}</p>
                <p>Business Number :{this.props.personalInfo.bnumber}</p>
                </div>

                <div className="personalData">
                <h1>Business Details</h1>
                <p>Country :{this.props.personalInfo.country}</p>
                <p>Currency :{this.props.personalInfo.currency}</p>
                <p>IFSC Code :{this.props.personalInfo.ifsccode}</p>
                <p>Account Number :{this.props.personalInfo.acntNumber}</p>
                </div>

                <div className="personalData">
                <h1>Address Data</h1>
                <p>City :{this.props.personalInfo.city}</p>
                <p>Post Code :{this.props.personalInfo.postcode}</p>
                <p>Address :{this.props.personalInfo.address}</p>
                </div>
            </div>
        )
    }
}
