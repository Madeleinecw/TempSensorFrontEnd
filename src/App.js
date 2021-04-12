import React, { useState} from 'react';
import './App.css';
import BokehComponent from './Components/BokehComponent'
import CirclesComponent from './Components/CirclesComponent';
import LiveUpdatesComponent from './Components/LiveUpdatesComponent';


const App = () => {
  const [bokeh, setBokeh] = useState({});


  return (
    <div>
      <div className="circles-live-container">
        <CirclesComponent  />  
        <LiveUpdatesComponent /> 
      </div>
        <BokehComponent bokeh={bokeh} setBokeh={setBokeh} />
    </div>
  );
};

export default App;
