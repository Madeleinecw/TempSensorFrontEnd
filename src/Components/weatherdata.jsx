import React from 'react';

const Weatherdata = ({weatherdata}) => {
   
    return (
        <div>
        <div>The Temperature is: {weatherdata.temp} &#176;C</div>
        <div>But it feels like: {weatherdata.feels_like} &#176;C </div>
         </div>
    )
}

export default Weatherdata