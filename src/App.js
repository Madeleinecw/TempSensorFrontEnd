import React, { useState, useEffect } from 'react';
import './App.css';
import BokehComponent from './Components/BokehComponent'
import socketIOClient from 'socket.io-client'


const App = () => {

  const [temperatures, setTemperatures] = useState([])
  
  const socket = socketIOClient("http://192.168.1.237:5000");

  useEffect(() => {

    // socket.on("connect", () => {
    // console.log(`Connected? ${socket.connected}`); // true
    // });

    socket.on('newTemperature', (msg) => {  
      console.log("getting new temperature")
      setTemperatures(msg.temperature)
      });
  }, [])

  // useEffect(() => {
  //   socket.on('newTemperature', (msg) => {  
  //     console.log("getting new temperature")
  //     setTemperatures(msg.temperature)
  //     });
  // }, [])

  const [bokeh, setBokeh] = useState({});
  

    return (
        <div>
          <div>It's currently {temperatures}&#176;C </div>
          
        <BokehComponent bokeh={bokeh} setBokeh={setBokeh} />
        </div>
    );
};



export default App;
