let colors = document.querySelector("#colors");
let red = document.querySelector(" .buttons  #red");
let yellow = document.querySelector(" .buttons  #yellow");
let green = document.querySelector(" .buttons  #green");

function redColor() {
  colors.innerText = "Stop";
  setCounterColor();
}
red.addEventListener("click", redColor);

function buttonClick() {
  colors.innerText = "attention";
  setCounterColor();
}
yellow.onclick = buttonClick;

green.onclick = function () {
  colors.innerText = "GO";
  setCounterColor();
};

function setCounterColor() {
  let currentText = colors.innerText;

  if (currentText === "GO") {
    colors.style.color = "green";
  } else if (currentText === "Stop") {
    colors.style.color = "red";
  } else if (currentText === "attention") {
    colors.style.color = "yellow";
  } else {
    colors.style.color = "cyan";
    r;
  }
}
