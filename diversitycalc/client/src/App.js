import React, { Component } from 'react';
import './App.css';
import { AddTeam } from './AddTeam';

class App extends Component {
  //state = {
    //Get and save team information
    //team : [
      //{ email: "", loc: "" overforty: "N", female: "Y", POC: "N"}
    //]
  //}
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h1>Diversity Calculator</h1>
        <AddTeam />
      
        </header>
      </div>
    );
  }
  
}

export default App;
