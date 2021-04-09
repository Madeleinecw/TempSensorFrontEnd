import { useLayoutEffect, useEffect, useState } from "react";
import React from 'react';
import {ResponsiveLine} from '@nivo/line'
import { range } from "d3-array";

const BokehComponent = ({bokeh, setBokeh}) => {

    const [formattedData, setFormattedData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        changeGraph(e.target.startTime.value, e.target.endTime.value)
    }


    function changeGraph(start, end) {
        var startAsDate = Date.parse(start)
        var endAsDate = Date.parse(end)

        if (endAsDate <= startAsDate + 599999){
            window.alert("These dates aren't going to work, bro. Please make sure your start time is before your end time and there is an interval of at least ten minutes.")
        } 
        else {
            fetch(`http://192.168.1.237:5000/getgraph/${start}/${end}`)
                .then(response => response.json())
                .then(data => setFormattedData(formatData(data)));                
        }
    }

    const formatData = (rangeOfTemperatures) => {
        // console.log(rangeOfTemperatures)
        let data = [
            {id: 'inside',
            data: []},
            {id: 'Outside',
            data: []},
            {id: 'Feels Like',
            data: []}
        ];

        let inside = [];
        let outside = [];
        let feelsLike = [];

        for (let i of rangeOfTemperatures) {
            console.log(i[3]);
            let insideRange = { x: i[3], y: i[0] };
            let outsideRange = { x: i[3], y: i[1] };
            let feelsLikeRange = { x: i[3], y: i[2] };
            inside.push(insideRange);
            outside.push(outsideRange);
            feelsLike.push(feelsLikeRange);
        }
        
        data[0].data = inside
        data[1].data = outside
        data[2].data = feelsLike 
        return data
    }

    const myResponsiveLine = ({ data }) => ( 
            <ResponsiveLine data={ data }
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'linear' }}
            yScale={{ type: 'point' }}
            yFormat=">-.2g"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5, 
                tickRotation: 0,
                legend : 'Date and Time',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
            ]}
            />
        )


    return (
        <div>
            {/* <div>{myResponsiveLine(formattedData)}</div> */}

            <form id="graph-select-form" onSubmit={handleSubmit}>    
                <div id="flex-start-graph-input">
                    <label htmlFor="start">Start time:</label>
                    <input type="datetime-local" id='startTime' name='startTime' value="2021-04-01T12:00" />
                </div>
                
                <div id="flex-end-graph-input">
                    <label htmlFor="end">End time:</label>
                    <input type="datetime-local" id='endTime' name='endTime' value="2021-04-02T12:00"/>
                </div>  
                
                <input type="submit" id="getGraph" value="Get Graph"/>

            </form>
        </div>
    )
}

export default BokehComponent