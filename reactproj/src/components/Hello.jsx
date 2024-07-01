let name = "Bob";

function displayMessage() {
  return name + " Wow!";
}

function Hello() {
  return (
    <div>
      <h1> Hi from a component {displayMessage()} </h1>
      <h1> Great!</h1>
    </div>
  );
}
export default Hello;
