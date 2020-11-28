import React, { Component } from 'react';

class Personal extends Component {
    constructor(props)
    {
        super(props)
        console.log(props);
    }
    render() {
    
        return (
           
            <div>
                <form className="personal-form">
                    <label>First Name
                        <input type="text" name="fname" value={this.props.name} onChange={this.props.setValue}/>
                    </label>
                    <span>{this.props.nameErr}</span> 
                    <label>Last Name
                        <input type="text" name="lname" value={this.props.lastName} onChange={this.props.setValue} />
                    </label>
                    <span>{this.props.lnameErr}</span> 
                    <label>Email
                        <input type="text" name="email" value={this.props.email} onChange={this.props.setValue} />
                    </label>
                    <span>{this.props.emailErr}</span> 
                    <label>PhoneNumber
                        <input type="text" name="number" value={this.props.number} onChange={this.props.setValue}/>
                    </label>
                    <span>{this.props.numberErr}</span> 
                </form>
            </div>
        );
    }
}

export default Personal;