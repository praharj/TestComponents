import React from "react";
import { Badge } from "react-bootstrap";

function Score() {
  return (
    <div style={{ textAlign: "right" }}>
      <h1>
        <Badge style={{ width: "200px" }} variant="secondary">
          Timer-0:00
        </Badge>
      </h1>
      <h1>
        <Badge style={{ width: "200px" }} variant="secondary">
          Score-0
        </Badge>
      </h1>
    </div>
  );
}

export default Score;
