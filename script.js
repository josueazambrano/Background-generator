var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("background");
var clickeable = document.getElementById("random");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

function gradientColor () {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	gradientColor();
}

gradientColor();

color1.addEventListener("input", gradientColor);
color2.addEventListener("input", gradientColor);
clickeable.addEventListener("click", randomColors);






