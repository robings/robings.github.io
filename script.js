const projects = [
  "bankOfMumAndDad",
  "officeSignIn",
  "academyPortal",
  "financeCalculator",
  "fastTimesTables",
  "aptitudeTest",
  "pairsGame",
  "collectionApp",
];
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
  projects.forEach((p) => {
    if (window.getComputedStyle(document.getElementById(p)).display !== "none")
      document.getElementById(p).style.display = "none";
  });

  if (newValue < 0) {
    newValue = projects.length - 1;
  }

  if (newValue > projects.length - 1) {
    newValue = 0;
  }

  document.getElementById(projects[newValue]).style.display = "block";
  projectPosition = newValue;
  if (slider.value !== newValue) {
    slider.value = newValue;
  }

  const indicatorString = buildIndicatorString(projectPosition);

  document.getElementById("carouselIndicator").textContent = indicatorString;
}
