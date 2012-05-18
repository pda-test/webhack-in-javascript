var canvas = document.getElementById("canvas");
var width = canvas.width;
var height = canvas.height;
var c = canvas.getContext("2d");

canvas.style.background = "rgba(200, 240, 200, 1)";

function draw(rotation) {
  c.fillStyle = "green";
  c.save();
  c.translate(width / 2 + rotation * 200, height / 2);
  c.rotate(rotation);
  for (var i = 0; i < 6; i++)
    c.fillRect((i * 40) - 110, -120, 20, 60);
  c.fillRect(-120, -20, 100, 100);
  c.fillRect(20, -20, 100, 100);
  c.clearRect(-60, 0, 20, 20);
  c.clearRect(80, 0, 20, 20);
  c.fillRect(-120, 120, 240, 40);
  c.restore();
}

function clear() {
  c.fillStyle = "rgba(200, 240, 200, 0.2)";
  c.fillRect(0, 0, width, height);
}

var i = 0;
function animate() {
  clear();
  draw(Math.sin(++i / 40));
  window.setTimeout(animate, 10);
}

var started = false;
window.addEventListener("click", function () {
  if (!started) { started = true; animate(); }
});

draw(0);