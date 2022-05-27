import React from "react";
import PieChart from "./Chart/PieChart";
import SampleChart from "./Chart/SampleChart";
function DashBoard() {


  return (
    <div>
      <SampleChart className="object-center"></SampleChart>
      {/* <PieChart></PieChart> */}
      </div>
  );
}

export default DashBoard;