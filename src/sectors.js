import React from "react";
import { Button } from "react-bootstrap";

function Sectors() {
  return (
    <div style={{ textAlign: "center" }}>
      <Button className="choicebtn" id="primarybtn" size="lg" variant="light">
        Primary
      </Button>
      <Button className="choicebtn" size="lg" variant="light">
        Secondary
      </Button>
      <Button className="choicebtn" size="lg" variant="light">
        Tertiary
      </Button>
    </div>
  );
}

export default Sectors;
