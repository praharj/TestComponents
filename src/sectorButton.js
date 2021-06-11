import React from 'react';
import {Button,ProgressBar} from 'react-bootstrap'
const SectorButton = (props) => {
    let color=props.color
    let name=props.name
    let color1="success"
    return (
      <div style={{ width: "50%", margin: "5% auto" }}>
        <Button style={{ marginBottom: "1%",color:"black",fontWeight:"bold" }} variant={color} size="lg" block>
          {name}
        </Button>
          <ProgressBar
            variant={color1}
            now={60}
            label={"now"}
            striped
          >
        </ProgressBar>
      </div>
    );
}
 
export default SectorButton;