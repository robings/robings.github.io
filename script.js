let msieFlag = 0;
let msEdgeFlag = 0;
let msEdge18Flag = 0;

if (window.scrollY !== 0) {
  document.querySelector(".backToTopIcon").style.display = "block";
}

const getProjects = async () => {
  const projectsJson = await fetch("./projects.json");
  const returnableProjects = await projectsJson.json();
  return returnableProjects;
};

const buildProjectDisplay = (project) => {
  const projectElement = document.createElement("div");
  projectElement.classList =
    project.size === "Large" ? "containerLarge" : "containerSmall";

  const projectBox = document.createElement("div");
  projectBox.classList = `projectBox ${project.class}`;

  const header = document.createElement("h3");
  header.textContent = project.title;

  const strapline = document.createElement("p");
  strapline.textContent = project.strapline;

  const modal = document.createElement("div");
  modal.classList = "modal";
  const modalInternal = document.createElement("div");
  modalInternal.classList = "modalInternal";
  const modalHeader = document.createElement("h3");
  modalHeader.textContent = project.title;
  const closeButton = document.createElement("div");
  closeButton.classList = "closeModal";
  closeButton.title = "Close";
  closeButton.textContent = "X";
  modalHeader.appendChild(closeButton);

  const modalImage = document.createElement("img");
  modalImage.classList = "projectImage";
  modalImage.src = project.image.url ?? "";
  modalImage.alt = project.image.alt ?? "";

  const modalUL = document.createElement("ul");
  project.projectInfo.forEach((i) => {
    const li = document.createElement("li");
    li.innerHTML = i;
    modalUL.appendChild(li);
  });

  const modalFooter = document.createElement("div");
  modalFooter.className = "modalFooter";
  project.links.forEach((l) => {
    const linkElement = document.createElement("a");
    linkElement.href = l.url;
    linkElement.target = "_blank";
    linkElement.textContent = l.display;
    modalFooter.appendChild(linkElement);
  });

  modalInternal.appendChild(modalHeader);
  modalInternal.appendChild(modalImage);
  modalInternal.appendChild(modalUL);
  modalInternal.appendChild(modalFooter);
  modal.appendChild(modalInternal);

  const footer = document.createElement("div");
  footer.classList = "projectBoxFooter";
  const moreLink = document.createElement("div");
  moreLink.classList = "more";
  moreLink.textContent = "More...";
  footer.appendChild(moreLink);
  project.links.forEach((l) => {
    const linkElement = document.createElement("a");
    linkElement.href = l.url;
    linkElement.target = "_blank";
    linkElement.textContent = l.display;
    footer.appendChild(linkElement);
  });

  projectBox.appendChild(header);
  projectBox.appendChild(strapline);
  projectBox.appendChild(modal);
  projectBox.appendChild(footer);
  projectElement.appendChild(projectBox);
  document.getElementById("idPortfolio").appendChild(projectElement);
};

const setup = async () => {
  const projects = await getProjects();
  console.log(projects);

  projects.projects.forEach((p) => buildProjectDisplay(p));

  detectMS();
  addEventListeners();
};

setup();

// for quick test of MSIE specific stuff uncomment the next line
// msieFlag = 1;
// for quick test of Edge specific stuff uncomment the next line
// msEdgeFlag = 1
//uncomment both Edge flags to test for Edge18 specific stuff
// msEdge18Flag = 1

if (msieFlag) {
  const msInfo = [
    "Sorry, Internet Explorer is not supported",
    ".financeCalculator ul",
    ".fastTimesTables ul",
  ];
  addBrowserSupportMessages(msInfo);
  document.querySelector("#clockContainer").style.display = "none";
}

if (msEdgeFlag && !msEdge18Flag) {
  document.querySelector("#clockContainer").style.display = "none";
}

function detectMS() {
  const browser = window.navigator.userAgent;

  if (browser.indexOf("MSIE ") > 0) {
    msieFlag = 1;
  } else if (browser.indexOf("Trident/") > 0) {
    msieFlag = 1;
  } else {
    msieFlag = 0;
  }

  if (browser.indexOf("Edge/") > 0) {
    msEdgeFlag = 1;
  } else {
    msEdgeFlag = 0;
  }

  if (browser.indexOf("Edge/18") > 0) {
    msEdge18Flag = 1;
  } else {
    msEdge18Flag = 0;
  }
}

function addBrowserSupportMessages(msInfo) {
  for (let i = 1; i < msInfo.length; i++) {
    const msMessage = document.createElement("li");
    msMessage.textContent = msInfo[0];
    msMessage.style.color = "#FF0000";
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

  const closeModalElements = document.querySelectorAll(".closeModal");
  closeModalElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      closeProjectModal(e);
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

function closeProjectModal(e) {
  const parentDiv = e.target.parentNode.parentNode.parentNode.parentNode;
  const parentDivClass = parentDiv.classList[1];
  const classToBeSelected = `.${parentDivClass} .modal`;
  if (
    window.getComputedStyle(document.querySelector(classToBeSelected))
      .display === "block"
  ) {
    document.querySelector(classToBeSelected).style.display = "none";
  }
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
