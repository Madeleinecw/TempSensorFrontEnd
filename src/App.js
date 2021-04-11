import React, { useState} from 'react';
import './App.css';
import BokehComponent from './Components/BokehComponent'
import CirclesComponent from './Components/CirclesComponent';
import LiveUpdatesComponent from './Components/LiveUpdateComponent';


const App = () => {

  

  const [bokeh, setBokeh] = useState({});
  

    return (
        <div>
        <CirclesComponent  />  
        <LiveUpdatesComponent /> 
        <BokehComponent bokeh={bokeh} setBokeh={setBokeh} />
        </div>
    );
};



export default App;
