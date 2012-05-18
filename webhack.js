var canvas = document.getElementById("canvas");
var width = canvas.width;
var height = canvas.height;
var c = canvas.getContext("2d");

canvas.style.background = "lightgreen";

c.fillStyle = "green";
c.translate((width - 240)/2, 100);
c.fillRect(0, 100, 100, 100);
c.fillRect(140, 100, 100, 100);
c.clearRect(40 + 20, 140 - 20, 20, 20);
c.clearRect(180 + 20, 140 - 20, 20, 20);
c.fillRect(0, 240, 240, 40);

for (var i = 0; i < 6; i++) {
  var offset = i * 40 + 10;
  c.fillRect(offset, 0, 20, 60);
}