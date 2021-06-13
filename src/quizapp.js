import React from "react";
import Score from "./score";
import Field from "./field";
import Sectors from "./sectors";
import Explanation from "./explanation";

function QuizApp() {
  return (
    <div
      style={{ backgroundColor: "aqua", height: "fit-content" }}
      className="container"
    >
      <Score />
      <Field />
      <Sectors />
      <Explanation />
    </div>
  );
}

export default QuizApp;
