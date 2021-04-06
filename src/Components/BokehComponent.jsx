import { useEffect, useState } from "react";
import React from 'react';

const BokehComponent = ({bokeh, setBokeh}) => {

    const [timeFrame, setTimeFrame] = useState({
        startTime : "",
        endTime: "",
    });

    useEffect(() => {
        changeBokehScript(bokeh.script);
    }, [bokeh])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        changeGraph(e.target[0].value, e.target[1].value)
    }

    const changeBokehScript = (bokehScript) => {
        if (typeof bokehScript !== 'undefined'){
            bokehScript = bokehScript.replace('<script type="text/javascript">','')
            bokehScript = bokehScript.replace('</script>','')

            var tag = document.getElementById('bokehScriptTag');
            tag.async = false;
            tag.textContent = bokehScript;
    }
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
                .then(data => setBokeh(data));

                
            }
    }



    return (
        <div>
            <p>A graph going here?</p>
            <div dangerouslySetInnerHTML={{__html: bokeh.div}}></div>

            <form id="graph-select-form" onSubmit={handleSubmit}>    
                <div id="flex-start-graph-input">
                    <label htmlFor="start">Start time:</label>
                    <input type="datetime-local" id='startTime' name='startTime' min="2021-03-22T12:00" />
                </div>
                
                <div id="flex-end-graph-input">
                    <label htmlFor="end">End time:</label>
                    <input type="datetime-local" id='endTime' name='endTime' />
                </div>  
                
                <input type="submit" id="getGraph" value="Get Graph"/>

            </form>
        </div>
    )
}

export default BokehComponent