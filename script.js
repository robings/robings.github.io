if (window.scrollY !== 0) {
  document.querySelector('.backToTopIcon').style.display = 'block';
}

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

function toggleEmailForTouchScreen() {
  if (window.getComputedStyle(document.getElementById('email')).display === 'none') {
      window.getComputedStyle(document.getElementById('emailForTouchScreens')).display === 'none' ?
      document.getElementById('emailForTouchScreens').style.display = 'block' :
      document.getElementById('emailForTouchScreens').style.display = 'none';
  }
}