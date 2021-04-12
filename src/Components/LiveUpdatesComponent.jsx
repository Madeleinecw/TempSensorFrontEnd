import React, { useState, useEffect } from 'react';
import MyResponsiveLine from '../Helpers/GraphMaker'
import formatData from '../Helpers/FormatData'
import '../Styling/LiveUpdatesComponent.css'

const LiveUpdatesComponent = () => {

    const [liveFormattedTime, setLiveFormattedTime] = useState();


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
              .then(data => setLiveFormattedTime(formatData(data)));
    }, [])


    function NoGraph() {
        return <div className="noGraph-text">There's no formatted data</div>;
    }

    function GraphCheck() {
        if (liveFormattedTime === undefined) {
            console.log('false');
            return <NoGraph />;
        }
        else {
            console.log('true');
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