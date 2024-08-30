let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const gooContainer = document.querySelector(".goo-container");
const heroImage = document.querySelector(".hero-image img");

const enableDarkMode = () => {
  document.body.classList.add("spooky");
  localStorage.setItem("darkMode", "enabled");
  document
    .querySelector(".dark-mode-toggle box-icon")
    .setAttribute("name", "moon");
  gooDrips();
  createBorders();
  heroImage.src = "/assets/hero_dark.png";
};

const disableDarkMode = () => {
  document.body.classList.remove("spooky");
  localStorage.setItem("darkMode", null);
  document
    .querySelector(".dark-mode-toggle box-icon")
    .setAttribute("name", "sun");
  gooContainer.innerHTML = "";
  heroImage.src = "/assets/hero_light.png";
  createBorders();
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function createBorders() {
  const topBorder = document.createElement("div");
  const bottomBorder = document.createElement("div");

  topBorder.classList.add("border", "top");
  bottomBorder.classList.add("border", "bottom");

  // Creating the SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.classList.add("svg-top");
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("viewBox", "0 0 1440 320");
  svgElement.setAttribute("width", "100%");
  svgElement.setAttribute("height", "100%");
  svgElement.setAttribute("preserveAspectRatio", "none");
  svgElement.innerHTML =
    '<path fill="var(--goo)" fill-opacity="1" d="M0,256L8.3,213.3C16.6,171,33,85,50,90.7C66.2,96,83,192,99,234.7C115.9,277,132,267,149,261.3C165.5,256,182,256,199,213.3C215.2,171,232,85,248,74.7C264.8,64,281,128,298,138.7C314.5,149,331,107,348,128C364.1,149,381,235,397,256C413.8,277,430,235,447,229.3C463.4,224,480,256,497,224C513.1,192,530,96,546,64C562.8,32,579,64,596,80C612.4,96,629,96,646,112C662.1,128,679,160,695,192C711.7,224,728,256,745,266.7C761.4,277,778,267,794,245.3C811,224,828,192,844,197.3C860.7,203,877,245,894,229.3C910.3,213,927,139,943,112C960,85,977,107,993,106.7C1009.7,107,1026,85,1043,69.3C1059.3,53,1076,43,1092,74.7C1109,107,1126,181,1142,192C1158.6,203,1175,149,1192,128C1208.3,107,1225,117,1241,122.7C1257.9,128,1274,128,1291,154.7C1307.6,181,1324,235,1341,261.3C1357.2,288,1374,288,1390,266.7C1406.9,245,1423,203,1432,181.3L1440,160L1440,0L1431.7,0C1423.4,0,1407,0,1390,0C1373.8,0,1357,0,1341,0C1324.1,0,1308,0,1291,0C1274.5,0,1258,0,1241,0C1224.8,0,1208,0,1192,0C1175.2,0,1159,0,1142,0C1125.5,0,1109,0,1092,0C1075.9,0,1059,0,1043,0C1026.2,0,1010,0,993,0C976.6,0,960,0,943,0C926.9,0,910,0,894,0C877.2,0,861,0,844,0C827.6,0,811,0,794,0C777.9,0,761,0,745,0C728.3,0,712,0,695,0C678.6,0,662,0,646,0C629,0,612,0,596,0C579.3,0,563,0,546,0C529.7,0,513,0,497,0C480,0,463,0,447,0C430.3,0,414,0,397,0C380.7,0,364,0,348,0C331,0,314,0,298,0C281.4,0,265,0,248,0C231.7,0,215,0,199,0C182.1,0,166,0,149,0C132.4,0,116,0,99,0C82.8,0,66,0,50,0C33.1,0,17,0,8,0L0,0Z"></path>';

  // Clone the SVG for the bottom border and apply vertical flip
  const svgElementFlip = svgElement.cloneNode(true);
  svgElementFlip.classList.add("svg-bottom");
  svgElementFlip.style.transform = "scaleY(-1)";
  svgElementFlip.style.transformOrigin = "center";

  gooContainer.appendChild(topBorder);
  topBorder.appendChild(svgElement);
  gooContainer.appendChild(bottomBorder);
  bottomBorder.appendChild(svgElementFlip);
}

function gooDrips() {
  const gooContainer = document.querySelector(".goo-container");
  const numDrips = 20;
  const minSize = 120;
  const maxSize = 240;

  // Creating the drips
  for (let i = 0; i < numDrips; i++) {
    const drip = document.createElement("div");
    const size = Math.random() * (maxSize - minSize) + minSize;

    // Create SVG element for each drip
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.setAttribute("width", `${size}`);
    svgElement.setAttribute("height", `${size}`);
    svgElement.setAttribute("viewBox", "0 0 200 200");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("fill", "var(--goo)");
    pathElement.setAttribute(
      "d",
      "M35.7,-16.7C39.8,0.8,32,17.1,20,25.3C8.1,33.4,-8.1,33.4,-18.5,25.8C-28.8,18.2,-33.4,2.9,-29.3,-14.6C-25.3,-32.1,-12.6,-52,1.6,-52.5C15.8,-53,31.7,-34.2,35.7,-16.7Z"
    );
    pathElement.setAttribute("transform", "translate(100 100)");

    svgElement.appendChild(pathElement);
    drip.appendChild(svgElement);

    // Randomly decide if the drip should be flipped vertically
    if (Math.random() > 0.5) {
      svgElement.style.transform = "scaleX(-1)";
    }

    drip.classList.add("drip");
    drip.style.width = `${size}px`; // Random width between 60px and 120px
    drip.style.height = `${size}px`; // Keep it a circle for now
    drip.style.left = `${Math.random() * 100}%`; // Random position between 0% and 100%
    drip.style.animationDelay = `${1 * (i + 1)}s`;

    gooContainer.appendChild(drip);
  }
}
