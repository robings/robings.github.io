// swipe code from https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android/23230280#23230280

const projects = [
  "bankOfMumAndDad",
  "quackingToothTimer",
  "officeSignIn",
  "academyPortal",
  "financeCalculator",
  "fastTimesTables",
  "aptitudeTest",
  "pairsGame",
];

var xDown = null;
var yDown = null;

let projectPosition = 0;

if (window.scrollY !== 0) {
  document.querySelector(".backToTopIcon").style.display = "block";
}

var slider = document.getElementById("portfolioControlRange");
slider.max = projects.length - 1;
slider.value = 0;

addEventListeners();

function addEventListeners() {
  document.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      document.querySelector(".backToTopIcon").style.display = "none";
    } else if (
      window.getComputedStyle(document.querySelector(".backToTopIcon"))
        .display === "none"
    ) {
      document.querySelector(".backToTopIcon").style.display = "block";
    }
  });

  const emailButton = document.querySelectorAll(".contactLeft")[0];
  emailButton.addEventListener("click", () => {
    toggleEmailForTouchScreen();
  });

  document.querySelector(".leftArrow").addEventListener("click", () => {
    changeProject(projectPosition - 1);
  });

  document.querySelector(".rightArrow").addEventListener("click", () => {
    changeProject(projectPosition + 1);
  });

  slider.addEventListener("input", () => {
    changeProject(slider.value);
  });

  document
    .querySelector(".projectDisplay")
    .addEventListener("touchstart", handleTouchStart, false);
  document
    .querySelector(".projectDisplay")
    .addEventListener("touchmove", handleTouchMove, false);
}

function toggleEmailForTouchScreen() {
  if (
    window.getComputedStyle(document.getElementById("email")).display === "none"
  ) {
    window.getComputedStyle(document.getElementById("emailForTouchScreens"))
      .display === "none"
      ? (document.getElementById("emailForTouchScreens").style.display =
          "block")
      : (document.getElementById("emailForTouchScreens").style.display =
          "none");
  }
}

function buildIndicatorString(position) {
  let string = "";
  for (let i = 0; i < projects.length; i++) {
    i == position ? (string = string + "_ ") : (string = string + ". ");
  }

  return string.trim();
}

function changeProject(newValue) {
  let diagnosticData = {
    original: newValue,
    new: newValue,
    oldProjectPosition: projectPosition,
    newProjectPosition: projectPosition,
  };

  let newValueAsInt = parseInt(newValue);

  projects.forEach((p) => {
    if (window.getComputedStyle(document.getElementById(p)).display !== "none")
      document.getElementById(p).style.display = "none";
  });

  if (newValueAsInt < 0) {
    newValueAsInt = projects.length - 1;
  }

  if (newValueAsInt > projects.length - 1) {
    newValueAsInt = 0;
  }

  diagnosticData.new = newValueAsInt;

  document.getElementById(projects[newValueAsInt]).style.display = "block";
  projectPosition = newValueAsInt;

  diagnosticData.newProjectPosition = projectPosition;

  if (slider.value !== newValueAsInt.toString()) {
    slider.value = newValueAsInt.toString();
  }

  const indicatorString = buildIndicatorString(projectPosition);

  document.getElementById("carouselIndicator").textContent = indicatorString;
  // document.getElementById(
  //   "diagnostics"
  // ).textContent = `input value: ${diagnosticData.original}, output value: ${diagnosticData.new}, input position: ${diagnosticData.oldProjectPosition}, output position: ${diagnosticData.newProjectPosition}`;
}

function getTouches(evt) {
  return evt.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      changeProject(projectPosition + 1);
    }
    if (xDiff < -0) {
      changeProject(projectPosition - 1);
    }
  }

  xDown = null;
  yDown = null;
}
