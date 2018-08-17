// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {}
// };

var myCanvas = document.querySelector("#my-road");
var ctx = myCanvas.getContext("2d");

//canvas size
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 800);

//the road
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 50, 800);

ctx.fillStyle = "green";
ctx.fillRect(450, 0, 50, 800);

ctx.fillStyle = "grey";
ctx.fillRect(75, 0, 350, 800);

ctx.fillStyle = "white";
ctx.beginPath();
ctx.setLineDash([5, 40]);
ctx.moveTo(250, 800);
ctx.lineTo(250, 0);
ctx.stroke();
