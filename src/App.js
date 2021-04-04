import React, { useState, useEffect } from 'react';
import './App.css';
import Weatherdata from './Components/weatherdata'
import BokehComponent from './Components/BokehComponent'

const App = () => {
  
  const [bokeh, setBokeh] = useState({});

  const getBokeh = async () => {
    var startTime = "2021-04-02T12:00"
    var endTime = "2021-04-04T12:00"
    fetch(`http://127.0.0.1:5000/getgraph/${startTime}/${endTime}`, {method: 'get'})
    .then(res => res.json())
    .then(data => setBokeh(data))
  }
  
  useEffect(() => {
    getBokeh()
    // window.Bokeh.embed.embed_item(bokeh)
  }, [bokeh])

    return (
        <div>
        <BokehComponent bokeh={bokeh} />
        </div>
    );
};



export default App;
