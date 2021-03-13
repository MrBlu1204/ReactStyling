import React from "react";
import Time from "./Time";

let greetings;

const time = <Time />;

function Greetings() {
  if (time < 12) {
    greetings = "Good Morning";
  } else if (time < 18) {
    greetings = "Good Afternoon";
  } else {
    greetings = "Good Night";
  }
  return greetings;
}

export default Greetings;
