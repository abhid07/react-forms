import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Beneficiary from './Beneficiary/Beneficiary';
import Nav from './Nav';
import DisplayComponent from './DisplayComponent'
import BusinessDetails from './BusinessDetails';
import Currency from '../Resources/Resources.json'
import AddressComponent from './AddressComponent';

class HomeComponent extends Component {
    constructor()
    {
        super()
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            number:'',
            bname:'',
            bemail:'',
            bnumber:'',
            country:'',
            ifsccode:'',
            acntNumber:'',
            currency:'USD',
            city:'',
            postcode:'',
            address:'',

            error:{
                nameErr:'',
                lnameErr:'',
                emailErr:'',
                numberErr:''
            }

            
        }
    }

    //Setting Benificiary Details

    setValue=(e)=>{
            // this.setState({personalInfo:{firstName:e.target.value}})

            if(e.target.name==='fname')
                if(e.target.value.length>5)
                    this.setState({
                        firstName:e.target.value,
                        error:{nameErr:null}
                    })
                else{
                    this.setState({
                        firstName:'',
                        error:{nameErr:'name should  have greater than 5 letters'}
                    })
                }
                
            else if(e.target.name==='lname')
            {
                if (e.target.value.length > 5)
                    this.setState({
                        lastName: e.target.value,
                        error: { lnameErr: null }
                    })
                else {
                    this.setState({
                        lastName: '',
                        error: { lnameErr: 'Last name should have greater than 5 letters' }
                    })
                }
            }
            else if (e.target.name === 'email') {
                if(e.target.value.indexOf("@")!=-1)
                    this.setState({
                        email: e.target.value,
                        error:{emailErr:null}
                    })
                else{
                    this.setState({
                        email: '',
                        error: { emailErr: 'Email should contain @ letter' }
                    })
                }
            }
            else if (e.target.name === 'number') {

                if (e.target.value.length === 10)
                    this.setState({
                        number: e.target.value,
                        error: { numberErr: null }
                    })
                else {
                    this.setState({
                        number: '',
                        error: { numberErr: 'Number should have 10 digits' }
                    })
                }
            }
            else if (e.target.name === 'bname') {
                if (e.target.value.length > 5)
                    this.setState({
                        bname: e.target.value,
                        error: { nameErr: null }
                    })
                else {
                    this.setState({
                        bname: '',
                        error: { nameErr: 'name should  have greater than 5 letters' }
                    })
                }
            }
            else if (e.target.name === 'bemail') {
                if (e.target.value.indexOf("@") != -1)
                    this.setState({
                        bemail: e.target.value,
                        error: { emailErr: null }
                    })
                else {
                    this.setState({
                        bemail: '',
                        error: { emailErr: 'Email should contain @ letter' }
                    })
                }
            }
            else if (e.target.name === 'bnumber') {
                if (e.target.value.length === 10)
                    this.setState({
                        bnumber: e.target.value,
                        error: { numberErr: null }
                    })
                else {
                    this.setState({
                        bnumber: '',
                        error: { numberErr: 'Number should have 10 digits' }
                    })
                }
            }
           
        }
    
    //Setting Business Details 

    setBusinessDetails = (e)=>{
        if(e.target.name==='country')
            Currency.map(val=>{
                if(val.name===e.target.value)
                {
                    this.setState({currency:val.currency,country:e.target.value})
                }
            })
        else if(e.target.name==="ifsc")
            this.setState({ifsccode:e.target.value})

        else
            this.setState({acntNumber:e.target.value})
    }

    //Setting Address Details

    setAddressDetails=(e)=>{
        if (e.target.name === 'city')
            this.setState({ city: e.target.value})
              
        else if (e.target.name === "postcode")
            this.setState({ postcode: e.target.value })

        else
            this.setState({ address: e.target.value })
    }

    render() {
            console.log(this.state)
        return (
        
            <div className="main-container">
                <Router>
                        <Nav/>
                        <Switch>
                        <Route exact path="/">
                            <Beneficiary personalInfo={{ ...this.state }} setValue={this.setValue}/>
                        </Route>
                        <Route path="/BusinessDetails">
                            <BusinessDetails {...this.state} setBusinessDetails={this.setBusinessDetails} currency={this.state.currency}/>
                        </Route>
                        <Route path="/AddressDetails">
                            <AddressComponent country={this.state.country} setAddressDetails={this.setAddressDetails} />
                        </Route>
                        <Route path="/DisplayComponent">
                            <DisplayComponent personalInfo={{ ...this.state }}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default HomeComponent;