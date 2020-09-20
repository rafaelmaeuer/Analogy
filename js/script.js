var color = "black";
var container = "swiffycontainer";

start(color);

window.onkeypress = function (event) {
  // console.log(event.keyCode)
  if (event.keyCode == 105) {
    invertColors();
  }
};

function start(color) {
  let analogyObject = color === "black" ? analogyblack : analogywhite
  let stage = new swiffy.Stage(
    document.getElementById(container),
    analogyObject,
    {}
  );
  stage.start();
}

function reset() {
  let oldDiv = document.getElementById(container);
  document.body.removeChild(oldDiv);
  let newDiv = document.createElement('div');
  newDiv.setAttribute("id", container);
  document.body.appendChild(newDiv);
}

function invertColors() {
  let newColor = color === "white" ? "black" : "white";
  console.log("switching from " + color + " to " + newColor);
  color = color === "black" ? "white" : "black";
  document.body.style.backgroundColor = color;
  reset();
  start(color);
}
