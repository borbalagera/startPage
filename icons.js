/* var status;
var weather;
function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Budapest&units=metric&units=metric&appid=4b52df0c72d732b4a364560667ecbafb",
    gotData
  );
}

function gotData(data) {
  status = data.weather[0].main;
}

function draw() {}

//sunny

function draw() {
  let mx = windowWidth / 2;
  let my = windowHeight / 3;
  let bgcolor = document.body.style.backgroundColor;
  background(bgcolor);
  if (status == "Clouds") {
    fill(255, 230, 89);
    stroke(2255, 230, 89);
    strokeWeight(3);
    translate(mx, my);
    rotate(radians(frameCount / 2));
    ellipse(0, 0, 60, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
  } else {
    stroke(2255, 230, 89);
    strokeWeight(3);
    translate(mx, my);
    rotate(radians(frameCount / 2));
    ellipse(0, 0, 60, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
  }
}

// rain

// y = 0;
// x = 0;
// fadeAmountOne = 255;
// fadeAmountTwo = 255;
// function oneDrop() {
//   //one
//   let mx = windowWidth / 2;
//   let my = windowHeight / 3;
//   stroke(59, 171, 253, fadeAmountOne - 130);
//   strokeWeight(1);
//   fill(59, 171, 253, fadeAmountOne);
//   translate(mx, my);
//   triangle(-5, y, 0, y + 15, -10, y + 15);
//   arc(-5, y + 15, 10, 15, 0, PI, CHORD);

//   stroke(59, 171, 253, fadeAmountTwo - 130);
//   strokeWeight(1);
//   fill(59, 171, 253, fadeAmountTwo);
//   triangle(-20, y - 20, -15, y - 5, -25, y - 5);
//   arc(-20, y - 5, 10, 15, 0, PI, CHORD);

//   stroke(59, 171, 253, fadeAmountTwo - 130);
//   strokeWeight(1);
//   fill(59, 171, 253, fadeAmountTwo);
//   triangle(20, y - 10, 25, y + 5, 15, y + 5);
//   arc(20, y + 5, 10, 15, 0, PI, CHORD);

//   stroke(59, 171, 253, fadeAmountOne - 130);
//   strokeWeight(1);
//   fill(59, 171, 253, fadeAmountOne);
//   triangle(5, y - 30, 10, y - 15, 0, y - 15);
//   arc(5, y - 15, 10, 15, 0, PI, CHORD);
// }

// function fall() {
//   y = y + 1;
//   fadeAmountOne = fadeAmountOne - 5;
//   fadeAmountTwo = fadeAmountTwo - 2;
//   if (y == 70) {
//     y = 0;
//     fadeAmountOne = 255;
//     fadeAmountTwo = 255;
//   }
// }

// function draw() {
//   let bgcolor = document.body.style.backgroundColor;
//   background(bgcolor);
//   oneDrop();
//   fall();
// }
*/
