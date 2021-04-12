import React, { useState, useEffect} from 'react';
import MyResponsiveLine from '../Helpers/GraphMaker'
import formatData from '../Helpers/FormatData'
import { ResponsiveLine } from '@nivo/line';
import '../Styling/LiveUpdatesComponent.css'

const LiveUpdatesComponent = () => {

    const [formattedData, setFormattedData] = useState([]);

    useEffect(() => {
        
        let unformatedEnd =  new Date();
        let unformatedStart = new Date(unformatedEnd);

        unformatedStart.setDate(unformatedStart.getDate() - 1)
        unformatedStart.setSeconds(0,0);
        unformatedEnd.setSeconds(0,0);

        let start = new Date(unformatedStart).toISOString().replace(/:00.000Z/, "");
        let end = new Date(unformatedEnd).toISOString().replace(/:00.000Z/, "");

        fetch(`http://192.168.1.237:5000/getgraph/${start}/${end}`)
                .then(response => response.json())
                .then(data => setFormattedData(formatData(data)));

        MyResponsiveLine(formattedData)
    },[])
 
    return (
        <div className="liveGraph-container">
            <ResponsiveLine/>
        </div>
    )

}

export default LiveUpdatesComponent;