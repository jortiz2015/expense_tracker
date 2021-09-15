import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataVals = props.data.map(d => d.value);
    const totalMax = Math.max(...dataVals);

    return (
        <div className="chart">
            {props.data.map(d => <ChartBar key={d.label} label={d.label} value={d.value} maxValue={totalMax} />)}
        </div>
    );
}

export default Chart;