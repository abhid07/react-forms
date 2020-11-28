
import './App.css';

import React, { Component } from 'react';
import HomeComponent from './Components/HomeComponent';

class App extends Component {
  constructor(){
    super()
  }
 
  render() {
    return (
      <div>
        <HomeComponent/>
      </div>
      
    );
    
  }
}

export default App;
