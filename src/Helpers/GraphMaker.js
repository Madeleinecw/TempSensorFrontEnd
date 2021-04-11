import React from 'react';
import { ResponsiveLine } from '@nivo/line'

class GraphMaker{

    MyResponsiveLine = ({ data }) => (
    <ResponsiveLine data={data}
        margin={{ top: 70, right: 50, bottom: 70, left: 85 }}
        xScale={{ type: 'time', format:"%Y-%m-%d %H:%M"}}
        yScale={{ type: 'linear', min:-5 }}
        xFormat="time:%Y-%m-%d %H:%M"
        yFormat=">-.0g"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        colors={["#A4B8BC", "#BCA4B8", "#A5BDA9"]}
        enableGridX={false}
        axisBottom={{
            orient: 'bottom',
            format: '%Y-%m-%d %H:%M',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -25,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 1,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Temperature',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={1}
        theme={{
            "textColor": "#151D17",
            "grid": {
                "line": {
                    "stroke": "#ECE6E5"
                }
            }
        }
        }
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 100,
                translateY: -50,
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
)}

    export default GraphMaker;