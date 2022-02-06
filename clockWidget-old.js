let svg = document.getElementById("turningClockFace");
for (let i = 0; i < 12 * 4; i++) {
  let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  newLine.setAttribute("x1", "152");
  newLine.setAttribute("y1", "22");
  newLine.setAttribute("x2", "152");
  newLine.setAttribute("y2", "26");
  newLine.style.stroke = "#000000";
  newLine.style.strokeWidth = "1";
  newLine.style.transform = `rotate(${i * 7.5}deg)`;
  newLine.style.transformOrigin = "center";
  svg.appendChild(newLine);
}

let h, m, s;
getTheTime();

setInterval(() => {
  getTheTime();
}, 1000);

function getTheTime() {
  let dateNow = new Date();

  h = dateNow.getHours();
  m = dateNow.getMinutes();
  s = dateNow.getSeconds();
  let hoursRotationSet =
    (h > 12 ? (h - 12) * (360 / 12) : h * (360 / 12)) +
    (m * (360 / 12)) / 60 +
    (s * (360 / 12)) / 60 / 60;

  document.getElementById(
    "turningClockFace"
  ).style.transform = `rotate(-${hoursRotationSet}deg)`;
  document.getElementById("turningClockFace").style.transformOrigin = "center";
}
