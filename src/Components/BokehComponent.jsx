import { useRef, useEffect } from "react";
import React from 'react';

const BokehComponent = (bokeh) => {
   
    const plotRef = useRef(null);

    // const getBokeh = async () => {
    //     var startTime = "2021-04-02T12:00"
    //     var endTime = "2021-04-04T12:00"
    //     fetch(`http://127.0.0.1:5000/getgraph/${startTime}/${endTime}`, {method: 'get'})
    //     .then(res => res.json())
    //     .then(data => setBokeh(data))
    // }

    useEffect(() => {
        plotRef.current = null;
        window.Bokeh.embed.embed_item(bokeh)
    }, [bokeh])

    // useEffect(() => {
    //     getBokeh();
    // }, [])

    function changeGraph() {
        var startTime = document.getElementById('graph-start').value;
        var startAsDate = Date.parse(startTime)
        var endTime = document.getElementById('graph-end').value;
        var endAsDate = Date.parse(endTime)

        if (endAsDate <= startAsDate + 599999){
            window.alert("These dates aren't going to work, bro. Please make sure your start time is before your end time and there is an interval of at least ten minutes.")
        } 
        else {
            fetch(`http://127.0.0.1:5000/getgraph/${startTime}/${endTime}`)
                .then(response => response.json())
                .then(data => window.Bokeh.embed.embed_item(data));

            console.log('The start time is ' + startTime.replace("T", " ") + ' and the end time is ' + endTime.replace("T", " "))}
    }

    return (
        <div>
            <p>A graph going here?</p>
            <div ref={plotRef} id='myplot' className='bk-root'></div>

            <form id="graph-select-form" >    
                <div id = "flex-start-graph-input">
                    <label htmlFor="start">Start time:</label>
                    <input type="datetime-local" id="graph-start" name='startTime' min="2021-03-22T12:00"/>
                </div>
                
                <div id = "flex-end-graph-input">
                    <label htmlFor="end">End time:</label>
                    <input type="datetime-local" id="graph-end" name='endTime'/>
                </div>  
                
                <input type = "button" id="getGraph" onClick={changeGraph} value="Get Graph"/>

            </form>
        </div>
    )
}

export default BokehComponent