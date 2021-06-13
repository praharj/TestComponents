import React from "react";
import Score from "./score";
import Field from "./field";
import Sectors from "./sectors";

function QuizApp() {
  return (
    <div
      style={{ backgroundColor: "aqua", height: "100vh" }}
      className="container"
    >
      <Score />
      <Field />
      <Sectors />
    </div>
  );
}

export default QuizApp;
