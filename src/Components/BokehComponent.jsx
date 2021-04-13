import { useState } from "react";
import React from 'react';
import '../Styling/GraphComponent.css'
import MyResponsiveLine from '../Helpers/GraphMaker'

const BokehComponent = ({ bokeh, setBokeh }) => {

    const [formattedData, setFormattedData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        changeGraph(e.target.startTime.value, e.target.endTime.value)
    }


    function changeGraph(start, end) {
        var startAsDate = Date.parse(start)
        var endAsDate = Date.parse(end)

        if (endAsDate <= startAsDate + 599999) {
            window.alert("These dates aren't going to work, bro. Please make sure your start time is before your end time and there is an interval of at least ten minutes.")
        }
        else {
            fetch(`http://192.168.1.237:5000/getgraph/${start}/${end}`)
                .then(response => response.json())
                .then(data => setFormattedData(formatData(data)));
        }
    }

    const formatData = (rangeOfTemperatures) => {
        let data = [
            {
                'id': 'inside',
                'data': []
            },
            {
                'id': 'Outside',
                'data': []
            },
            {
                'id': 'Feels Like',
                'data': []
            }
        ];

        let inside = [];
        let outside = [];
        let feelsLike = [];

        for (let i of rangeOfTemperatures) {
            let formattedDatetime = new Date(i[3]);
            let blahTime = `${formattedDatetime.getFullYear()}-${(formattedDatetime.getMonth() + 1).toString().padStart(2, '0')}-${formattedDatetime.getDate().toString().padStart(2, '0')} ${(formattedDatetime.getHours().toString().padStart(2, '0'))}:${formattedDatetime.getMinutes().toString().padEnd(2, '0')}`;
            let insideRange = { x: blahTime, y: i[0] };
            let outsideRange = { x: blahTime, y: i[1] };
            let feelsLikeRange = { x: blahTime, y: i[2] };

            inside.push(insideRange);
            outside.push(outsideRange);
            feelsLike.push(feelsLikeRange);
        }

        data[0].data = inside
        data[1].data = outside
        data[2].data = feelsLike
        return data
    }

    

    function NoGraph() {
        return <div className="noGraph-text">Please select some dates</div>;
    }

    function GraphCheck() {
        if (formattedData === undefined) {
            return <NoGraph />;
        }
        else {
            return <MyResponsiveLine data={formattedData} />
        }
    }

    return (
        <div className='bokeh-component-wrapper'>
            <div className='graph-wrapper'>
            <div className='graph-container'>
                <GraphCheck />
            </div>
            </div>

            <form id="graph-select-form" onSubmit={handleSubmit}>
                <div id="flex-start-graph-input">
                    <label htmlFor="start">Start time:</label>
                    <input type="datetime-local" id='startTime' name='startTime' min="2021-03-31T09:00" />
                </div>

                <div id="flex-end-graph-input">
                    <label htmlFor="end">End time:</label>
                    <input type="datetime-local" id='endTime' name='endTime' />
                </div>

                <input type="submit" id="getGraph" value="Get Graph" />

            </form>
        </div>
    )
}

export default BokehComponent