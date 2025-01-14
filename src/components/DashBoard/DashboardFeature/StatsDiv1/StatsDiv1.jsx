import React from "react";
import "./StatsDiv1.css";

function StatsDiv1({ content, style }) {
  return (
    <div className="statsdivcontainer" style={style}>
      {content}
    </div>
  );
}

export default StatsDiv1;
