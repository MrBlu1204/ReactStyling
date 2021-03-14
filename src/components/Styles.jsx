import currentTime from "./Time";

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  customStyle.color = "red";
} else if (currentTime < 18) {
  customStyle.color = "green";
} else {
  customStyle.color = "blue";
}

export default customStyle;
