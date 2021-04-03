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
        </div>
    )
}

export default BokehComponent