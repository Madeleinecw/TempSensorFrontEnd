import React, { Component } from 'react';
import './App.css';
import Weatherdata from './Components/weatherdata'
import BokehComponent from './Components/BokehComponent'

class App extends Component {
  
  state  = {
    weatherdata : [],
  };

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2648579&appid=ab3b10ceeb32e9e2635906ef718eec7f&units=metric')
    .then(res => res.json())
    .then(data => this.setState({weatherdata: data.main}));
  }
  
  render() {
    return (
        <div>
        <Weatherdata weatherdata={this.state.weatherdata}/>
        <BokehComponent />
        </div>
    );
  }
};

// 21125
// 341773c0a2b7f33a96d3957a653095c1

export default App;
