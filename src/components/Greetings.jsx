import currentTime from "./Time";

let greetings;

function Greetings() {
  if (currentTime < 12) {
    greetings = "Good Morning";
  } else if (currentTime < 18) {
    greetings = "Good Afternoon";
  } else {
    greetings = "Good Night";
  }
  return greetings;
}

export default Greetings;
