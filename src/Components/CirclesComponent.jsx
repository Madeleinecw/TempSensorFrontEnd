import React from 'react';
import '../Styling/CirclesComponent.css';

const CirclesComponent = ({temperatures, outsideTemp, feelsLikeTemp}) => {

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