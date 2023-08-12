window.onload = init;
function init() {
	var image0 = document.getElementById("zero");
	image0.onclick = showAnswer
	var image1 = document.getElementById("one");
	image1.onclick = showAnswer
	var image2 = document.getElementById("two");
	image2.onclick = showAnswer
	var image3 = document.getElementById("three");
	image3.onclick = showAnswer
	var image4 = document.getElementById("four");
	image4.onclick = showAnswer
	var image5 = document.getElementById("five");
	image5.onclick = showAnswer
}

function showAnswer() {
	var image = document.getElementById("zero");
	image.src = "images/zero.jpg";
	var image = document.getElementById("one");
	image.src = "images/one.jpg";
	var image = document.getElementById("two");
	image.src = "images/two.jpg";
	var image = document.getElementById("three");
	image.src = "images/three.jpg";
	var image = document.getElementById("four");
	image.src = "images/four.jpg";
	var image = document.getElementById("five");
	image.src = "images/five.jpg";
}