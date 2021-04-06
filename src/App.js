import React, { useState, useEffect } from 'react';
import './App.css';
import BokehComponent from './Components/BokehComponent'
// import socketIOClient from 'socket.io-client'


const App = () => {

  // const [temperatures, setTemperatures] = useState([])

  
  
  useEffect(() => {
  //   const socket = socketIOClient(encodeURI("http://192.168.1.237:5000"))

  //   socket.on("connect", () => {
  //   // console.log('connected'); // true

  //   socket.on('newTemperature', function(msg) {  
  //     // console.log("getting new temperature")
  //     setTemperatures(msg.temperature)});
  // });
  }, []) 

  const [bokeh, setBokeh] = useState({});
  

    return (
        <div>
          {/* <div>It's currently {temperatures}&#176;C </div> */}
          
        <BokehComponent bokeh={bokeh} setBokeh={setBokeh} />
        </div>
    );
};



export default App;
