var canvas = document.getElementById("canvas");
var width = canvas.width;
var height = canvas.height;
var c = canvas.getContext("2d");

canvas.style.background = "lightgreen";

function draw(rotation) {
  c.fillStyle = "green";
  c.save();
  c.translate(width / 2, height / 2);
  c.rotate(rotation);
  c.fillRect(-120, -20, 100, 100);
  c.fillRect(20, -20, 100, 100);
  c.clearRect(-80 + 20, 20 - 20, 20, 20);
  c.clearRect(60 + 20, 20 - 20, 20, 20);
  c.fillRect(-120, 120, 240, 40);
  for (var i = 0; i < 6; i++) {
    var offset = -120 + i * 40 + 10;
    c.fillRect(offset, -120, 20, 60);
  }
  c.restore();
}

i = 0;
function animate() {
  i++;
  increment = Math.sin(i / 40);
  c.fillStyle = "rgba(128, 255, 128, 0.05)";
  c.fillRect(0, 0, width, height);
  draw(increment);
  window.setTimeout(animate, 10);
}

animate();