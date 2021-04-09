import React, { useState, useEffect } from 'react';
import './App.css';
import BokehComponent from './Components/BokehComponent'
import socketIOClient from 'socket.io-client'


const App = () => {

  const [temperatures, setTemperatures] = useState([]);
  const [outsideTemp, setOutsideTemp] = useState([]);
  const [feelsLikeTemp, setFeelsLikeTemp] = useState([]);
  const [time, setTime] = useState([]);
  
  

  useEffect(() => {

    const socket = socketIOClient("http://192.168.1.237:5000");

    socket.on('newTemperature', (msg) => {  
      setTemperatures(msg.temperature)
      });

    // socket.on('newTime', (msg) => {  
    //   setTime(msg.time)
    //   });

    socket.on('newOutsideTemp', (msg) => {
      setOutsideTemp(msg.outsideTemp)
      });
    
    socket.on('newOutsideFeelsLike', (msg) => {
      setFeelsLikeTemp(msg.outsideFeelsLikeTemperature)
    })
  }, [])

  const [bokeh, setBokeh] = useState({});
  

    return (
        <div>
          <div>It's currently blah and {temperatures}&#176;C </div>
          <div>Outside it's currently {outsideTemp}&#176;C but it feels more like {feelsLikeTemp}&#176;C</div>
          
        <BokehComponent bokeh={bokeh} setBokeh={setBokeh} />
        </div>
    );
};



export default App;
