import React, { useState, useEffect } from 'react';
import './App.css';
import Weatherdata from './Components/weatherdata'
import BokehComponent from './Components/BokehComponent'

const App = () => {
  
  const [bokeh, setBokeh] = useState({});
  const [currentTemp, setCurrentTemp] = useState([]);

  const getCurrentTemp = async () => {
    fetch(`http://192.168.1.237:5000/getTemp`, {method: 'get'})
    .then(res => res.json())
    .then(data => setCurrentTemp(data))
  }
  
  useEffect(() => {
    getCurrentTemp()
  }, [])

    return (
        <div>
          <div>It's currently {currentTemp}&#176;C </div>
        <BokehComponent bokeh={bokeh} setBokeh={setBokeh} />
        </div>
    );
};



export default App;
