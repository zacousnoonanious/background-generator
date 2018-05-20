
var _ = require('lodash');
var array = [1,2,3,4,5,6,7];
console.log('answer: ', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
console.log("color1 " + color1.value);
color1.value = "#11ff11";
color2.value = "#110000";

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background;
}

setGradient();


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);