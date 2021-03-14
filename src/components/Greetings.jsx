import currentTime from "./Time";

let greetings;
const customStyle = {
  color: ""
};

function Greetings() {
  if (currentTime < 12) {
    greetings = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greetings = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greetings = "Good Night";
    customStyle.color = "blue";
  }
  return greetings;
}
export default Greetings;
export { customStyle };
