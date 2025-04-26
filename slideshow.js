var current = 0;
var total = 4;

var Next = document.getElementById("next");
var Prev = document.getElementById("previous");
var slides = document.getElementsByClassName("slide");

Next.onclick = function () {
  console.log("next");

  current = current + 1;
  console.log("current is now: " + current);

  if (current >= total) {
    current = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[current].style.display = "block";
};

Prev.onclick = function () {
  console.log("previous");

  current = current - 1;

  if (current < 0) {
    current = total - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[current].style.display = "block";
};
