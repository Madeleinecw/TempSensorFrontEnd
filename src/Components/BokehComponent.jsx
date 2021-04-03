import { useEffect, useState } from "react";
import React from 'react';

const BokehComponent = () => {
   
    const [bokeh, setBokeh] = useState({});

    const getBokeh = async () => {
        fetch("http://127.0.0.1:5000/bokehall", {method: 'get'})
        .then(res => res.json())
        .then(data => window.Bokeh.embed.embed_item(data))
    }

    useEffect(() => {
        getBokeh();
    }, [])

    return (
        <div>
            <p>A graph going here?</p>
            <div id='myplot' className='bk-root'></div>

            <form id="graph-select-form" >    
            <div id = "flex-start-graph-input">
            <label for="start">Start time:</label>
            <input type="datetime-local" id="graph-start" name='startTime' min="2021-03-22T12:00"/>
            </div>
            <div id = "flex-end-graph-input">
            <label for="end">End time:</label>

            <input type="datetime-local" id="graph-end" name='endTime'/>
            </div>  
            <input type = "button" id="getGraph" onclick="changeContent()" value="Get Graph"/>

            </form>
        </div>
    )
}

export default BokehComponent