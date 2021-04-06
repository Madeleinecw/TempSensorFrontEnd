import React, { useState, useEffect } from 'react';
import './App.css';
import BokehComponent from './Components/BokehComponent'
// import { io } from "socket.io-client"

const App = () => {

  let io = require("socket.io-client")
  let socket = io("http://192.168.1.237:5000/test");  

  socket.on("connect", () => {
    console.log(socket.connected); // true
  });

  socket.on("connect_error", (error) => {
    console.log(error)
  });

  const [bokeh, setBokeh] = useState({});
  const [currentTemp, setCurrentTemp] = useState([]);
  const [temperatures, setTemperatures] = useState([])

  socket.on('newTemperature', msg => {  
    console.log(msg.temperature)
    setTemperatures(msg.temperature)});

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
