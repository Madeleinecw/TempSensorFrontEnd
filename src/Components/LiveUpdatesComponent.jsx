import React, { useState, useEffect } from 'react';
import MyResponsiveLine from '../Helpers/GraphMaker'
import formatData from '../Helpers/FormatData'
import '../Styling/LiveUpdatesComponent.css'
import socketIOClient from 'socket.io-client'


const LiveUpdatesComponent = () => {

    const [liveFormattedTime, setLiveFormattedTime] = useState();
    const [mostRecentTimestamp, setMostRecentTimestamp] = useState();


    useEffect(() => {
        const socket = socketIOClient("http://192.168.1.237:5000");

        socket.on('updated', (msg) => {  
            setMostRecentTimestamp(msg.updated)
        });
    }, [])

    useEffect(() => {
        let unformatedEnd =  new Date();
        let unformatedStart = new Date(unformatedEnd);

        unformatedStart.setDate(unformatedStart.getDate() - 1)
        unformatedStart.setSeconds(0,0);
        unformatedEnd.setSeconds(0,0);

        let start = new Date(unformatedStart).toISOString().replace(/:00.000Z/, "");
        let end = new Date(unformatedEnd).toISOString().replace(/:00.000Z/, "");

        console.log(end)

        fetch(`http://192.168.1.237:5000/getgraph/${start}/${end}`)
            .then(response => response.json())
            .then(data => setLiveFormattedTime(formatData(data)));

        console.log(liveFormattedTime)

    }, [mostRecentTimestamp])


    function NoGraph() {
        return <div className="noGraph-text">Loading the live graph</div>;
    }

    function GraphCheck() {
        if (liveFormattedTime === undefined) {
            return <NoGraph />;
        }
        else {
            console.log(liveFormattedTime)
            return <MyResponsiveLine data={liveFormattedTime} />
        }
    }
   
 
    return (
        <div className='liveGraph-container'>
            <GraphCheck />
        </div>
    )

}

export default LiveUpdatesComponent;