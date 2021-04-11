import React, { useState, useEffect} from 'react';
import MyResponsiveLine from '../Helpers/GraphMaker'
import formatData from '../Helpers/FormatData'

const LiveUpdatesComponent = () => {

    const [getData, setGetData] = useState([]);
    const [formatData, setFormatData] = useState([]);
 
    return (
        <div className="liveGraph-container">

        </div>
    )

}

export default LiveUpdatesComponent;