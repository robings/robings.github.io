let msieFlag = 0;
let msEdgeFlag = 0;
let msEdge18Flag = 0;

if (window.scrollY !== 0) {
    document.querySelector('.backToTopIcon').style.display = 'block';
}

detectMS();
addEventListeners();


// for quick test of MSIE specific stuff uncomment the next line
// msieFlag = 1
// for quick test of Edge specific stuff uncomment the next line
// msEdgeFlag = 1
//uncomment both Edge flags to test for Edge18 specific stuff
// msEdge18Flag = 1

if (msieFlag) {
    const msInfo = [
        'Sorry, Internet Explorer is not supported',
        '.projectBox.financeCalculator ul',
        '.projectBox.fastTimesTables ul'
    ];
    addBrowserSupportMessages(msInfo);
    document.querySelector('#clockContainer').style.display = 'none';
}

if (msEdgeFlag && !msEdge18Flag) {
    document.querySelector('#clockContainer').style.display = 'none';
}

function detectMS() {
    const browser = window.navigator.userAgent;

    if (browser.indexOf('MSIE ') > 0) {
        msieFlag = 1;
    } else if (browser.indexOf('Trident/') > 0) {
        msieFlag = 1;
    } else {
        msieFlag = 0;
    }

    if (browser.indexOf('Edge/') > 0) {
        msEdgeFlag = 1;
    } else {
        msEdgeFlag = 0;
    }

    if (browser.indexOf('Edge/18') > 0) {
        msEdge18Flag = 1;
    } else {
        msEdge18Flag = 0;
    }
}

function addBrowserSupportMessages(msInfo) {
    for (let i=1; i<(msInfo.length); i++) {
        const msMessage = document.createElement('li');
        msMessage.textContent = msInfo[0];
        msMessage.style.color = '#FF0000';
        document.querySelector(msInfo[i]).appendChild(msMessage);
    }
}

function addEventListeners() {
  const moreElements = document.querySelectorAll(".more");
  moreElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      openProjectModal(e);
    });
  });

  const emailButton = document.querySelectorAll(".contactLeft")[0];
  emailButton.addEventListener("click", () => {
    toggleEmailForTouchScreen();
  });

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
}

function openProjectModal(e) {
  const parentDiv = e.target.parentNode.parentNode;
  const parentDivClass = parentDiv.classList[1];
  const classToBeSelected = `.${parentDivClass} .modal`;
  if (
    window.getComputedStyle(document.querySelector(classToBeSelected))
      .display === "none"
  ) {
    document.querySelector(classToBeSelected).style.display = "block";
  }
}

function toggleEmailForTouchScreen() {
    if (window.getComputedStyle(document.getElementById('email')).display === 'none') {
        window.getComputedStyle(document.getElementById('emailForTouchScreens')).display === 'none' ?
        document.getElementById('emailForTouchScreens').style.display = 'block' :
        document.getElementById('emailForTouchScreens').style.display = 'none';
    }
}
