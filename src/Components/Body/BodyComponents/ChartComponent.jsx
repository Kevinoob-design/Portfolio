//jshint esversion:6

import React from "react";
import { Bar, HorizontalBar } from 'react-chartjs-2';

function Chart(props){
    return (
        <div>
            <HorizontalBar data={props.params.chartData} options={{
                title:{
                    display: true,
                    text: props.params.chartData.title,
                    fontSize: 20
                },
                legend:{
                    display: false,
                    position: "right"
                },
                tooltips:{enabled: false}
            }}/>
        </div>
    )
}
export default Chart;