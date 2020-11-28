import React, { Component } from 'react';

class Business extends Component {
    constructor(props)
    {
        super(props)
     
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <form className="personal-form">
                    <label>Business Name
                        <input type="text" name="bname" value={this.props.bname} onChange={this.props.setValue} />
                    </label>
                    <span>{this.props.nameErr}</span> 
                    <label>Email
                        <input type="text" name="bemail" value={this.props.bemail} onChange={this.props.setValue} />
                    </label>
                    <span>{this.props.emailErr}</span>
                    <label>Phone Number
                        <input type="text" name="bnumber" value={this.props.bnumber} onChange={this.props.setValue} />
                    </label>
                    <span>{this.props.numberErr}</span> 
                </form>
            </div>
        );
    }
}

export default Business;