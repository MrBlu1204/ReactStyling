import React from "react";
import Greetings from "./Greetings";
import customStyle from "./Styles";
//import Time from "./Time";

//const time = <Time />;

//const customStyle = {
//  color: ""
//};

//if (time < 12) {
//  customStyle.color = "red";
//} else if (time < 18) {
//  customStyle.color = "green";
//} else {
//  customStyle.color = "blue";
//}

console.log({ customStyle });
function Headings() {
  return (
    <h1 className="heading" style={customStyle}>
      <Greetings />
    </h1>
  );
}

export default Headings;
