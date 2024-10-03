import "./styles/about.css";
import "./styles/contact.css";
import "./styles/goo.css";
import "./styles/hero.css";
import "./styles/main.css";
import "./styles/navbar.css";
import "./styles/work.css";

document
  .querySelector(".overlay")
  .addEventListener("animationend", function () {
    this.style.display = "none"; // Hide the div after the animation ends
  });

function toggleNavList() {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display === "") {
    navList.style.display = "flex";
  } else {
    navList.style.display = "";
  }
}

// DARK MODE
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const gooContainer = document.querySelector(".goo-container");
const heroImage = document.querySelector(".hero-image img");

const enableDarkMode = () => {
  document.body.classList.add("spooky");
  localStorage.setItem("darkMode", "enabled");
  document
    .querySelector(".dark-mode-toggle i")
    .setAttribute("class", "fa-solid fa-moon fa-lg");
  gooDrips();
  heroImage.src = "../src/assets/hero_dark.png";
};

const disableDarkMode = () => {
  document.body.classList.remove("spooky");
  localStorage.setItem("darkMode", null);
  document
    .querySelector(".dark-mode-toggle i")
    .setAttribute("class", "fa-solid fa-sun fa-lg");
  // Remove all drip elements
  document.querySelectorAll(".drip").forEach((drip) => {
    drip.remove();
  });
  heroImage.src = "../src/assets/hero_light.png";
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
