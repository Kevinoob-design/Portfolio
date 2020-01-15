//jshint esversion:6

import React from "react";
import { HorizontalBar } from 'react-chartjs-2';

// let jsonData = (function getJson(arg) {

//     // console.table(arg);

//     function returnJson() {
//         const data = arg;
//         return data;
//     }
//     return returnJson;
// }("data"));

function Chart(props){

    // let functions = {
    //     getJsonData: (function grab(arg) {

    //         var data = arg;

    //         function retuirnJson() {
    //             return data;
    //         }
    //         return retuirnJson;

    //     }(props.params))
    // };
    
    // module.exports = functions;
    
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

// export { jsonData };