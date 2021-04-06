import React, { useState, useEffect } from 'react';
import './App.css';
import BokehComponent from './Components/BokehComponent'
import socketIOClient from 'socket.io-client'


const App = () => {

  const [currentTemp, setCurrentTemp] = useState([]);
  const [temperatures, setTemperatures] = useState([])
  
  useEffect(() => {
    const socket = socketIOClient(encodeURI("http://192.168.1.237:5000"))

    socket.on("connect", () => {
    console.log('connected'); // true

    socket.on('newTemperature', function(msg) {  
      console.log("getting new temperature")
      setTemperatures(msg.temperature)});
  });
  }, []) 

  const [bokeh, setBokeh] = useState({});
  

  

  const getCurrentTemp = async () => {
    fetch(`http://192.168.1.237:5000/getTemp`, {method: 'get'})
    .then(res => res.json())
    .then(data => setCurrentTemp(data))
  }
  
  useEffect(() => {
    getCurrentTemp()
  }, [currentTemp])

    return (
        <div>
          <div>It's currently {currentTemp}&#176;C </div>
          {temperatures}
        <BokehComponent bokeh={bokeh} setBokeh={setBokeh} />
        </div>
    );
};



export default App;
