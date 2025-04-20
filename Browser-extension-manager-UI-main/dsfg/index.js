function setTrue() {
  toggle.style.left = "50px";
  toggle.style.backgroundColor = "black";
  document.querySelector("body").style.backgroundColor = "black";
}
function setFalse() {
  toggle.style.left = "0px";
  toggle.style.backgroundColor = "white";
  document.querySelector("body").style.backgroundColor = "white";
}

let isTrue = true;
const button = document.querySelector(".button");
const toggle = document.querySelector(".toggle");
button.addEventListener("click", () => {
  isTrue = !isTrue;
  isTrue ? setTrue() : setFalse();
});
