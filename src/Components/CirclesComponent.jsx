import React from 'react';

const CirclesComponent = ({temperatures, outsideTemp, feelsLikeTemp}) => {

    return (
        <div className="circles-container">
            <div className="temperatures-circle">{temperatures}&#176;C</div>
            <div className="outside-circle">{outsideTemp}&#176;C</div>
            <div className="feelsLike-circle">{feelsLikeTemp}&#176;C</div>

        </div>
    )

}

export default CirclesComponent;