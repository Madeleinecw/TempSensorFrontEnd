import React, { useState} from 'react';
import './App.css';
import BokehComponent from './Components/BokehComponent'
import CirclesComponent from './Components/CirclesComponent';


const App = () => {

  

  const [bokeh, setBokeh] = useState({});
  

    return (
        <div>
        <CirclesComponent  />  
        <BokehComponent bokeh={bokeh} setBokeh={setBokeh} />
        </div>
    );
};



export default App;
