import React, {useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client'
import '../Styling/CirclesComponent.css';

const CirclesComponent = () => {

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

    return (
        <div className="circles-container">
            <div className="temperatures-circle">
                <p className="label">Inside: </p>
                <p className="temp">{temperatures}&#176;C</p></div>
            <div className="outside-circle">
                <p className="label">Outside: </p>
                <p>{outsideTemp}&#176;C</p></div>
            <div className="feelsLike-circle">
                <p className="label">Feels Like:</p>
                <p> {feelsLikeTemp}&#176;C </p></div>

        </div>
    )

}

export default CirclesComponent;