import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import SectorButton from "./sectorButton.js"

function FullWidthGrid() {
  // const classes = useStyles();

  return (
    <div>
      Hi0
      <div style={{width:"80%"}}>
        By1
      </div>
      <div style={{width:"20%"}}>
        Get1
      </div>
      <SectorButton></SectorButton>
    </div>
  );
}

ReactDOM.render(<FullWidthGrid />, document.getElementById("root"));
