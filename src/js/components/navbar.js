// navbar.js
const main = document.querySelector("main");
const header = document.querySelector("header");
const topBorder = document.getElementById("top-border");

// ================== Animation ================== //
// Hide after animation ends, otherwise navbar will be completely covered
// Using a regular function because we can use the `this` keyword. Arrow functions
// don't have a `this` keyword.
document
  .querySelector(".animated-ghost-overlay")
  .addEventListener("animationend", function () {
    this.style.display = "none";
  });

// ================== Toggle NavList ================== //
// Don't need to reuse this code, so I will keep it nested
document.querySelector(".navbar-toggle").addEventListener("click", () => {
  const navListToggle = document.querySelector(".nav-list-toggle");
  if (navListToggle.classList.contains("hidden")) {
    navListToggle.classList.remove("hidden");
  } else {
    navListToggle.classList.add("hidden");
  }
});

// ================== Navbar Hide ================== //
window.addEventListener("scroll", () => {
  if (window.innerWidth > 865) {
    if (window.scrollY >= 160) {
      header.style.position = "fixed";
      main.style.paddingTop = "160px";
      topBorder.style.position = "fixed";
      topBorder.style.top = "100px";
      hideNavbar();
      header.addEventListener("mouseenter", showNavbar);
      header.addEventListener("mouseleave", hideNavbar);
    } else {
      header.style.position = "relative";
      main.style.paddingTop = "0";
      topBorder.style.position = "relative";
      topBorder.style.top = "0";
      showNavbar();
      header.removeEventListener("mouseenter", showNavbar);
      header.removeEventListener("mouseleave", hideNavbar);
    }
  } else return;
});

const showNavbar = () => {
  header.style.opacity = 1;
  topBorder.style.opacity = 1;
};

const hideNavbar = () => {
  header.style.opacity = 0;
  topBorder.style.opacity = 0;
};

// ================== NavLinks ================== //
document.querySelectorAll(".nav-link").forEach((link) => {
  if (window.innerWidth > 865) {
    link.addEventListener("mousedown", () => {
      link.style.boxShadow = "none";
      link.style.transform = "translate(2px, 2px)";
    });
    link.addEventListener("mouseup", () => resetStyles(link));
    link.addEventListener("mouseleave", () => resetStyles(link));
    link.addEventListener("click", (event) => {
      if (window.location.href === link.href) {
        for (let i = 0; i < 3; i++) {
          createSplatter(event);
        }
      }
    });
  }
});

// ~~~~~~~~~~~~~~~~~~~ mouseup & mouseleave ~~~~~~~~~~~~~~~~~~~ //
// This makes it look like a button is being pressed
function resetStyles(link) {
  link.style.boxShadow = "4px 4px 1px rgba(0, 0, 0, 1)";
  link.style.transform = "translate(0, 0)";
}

// ~~~~~~~~~~~~~~~~~~~ click ~~~~~~~~~~~~~~~~~~~ //
// it would be cool to have the velocity change depending on
// how quickly the user presses the button
function createSplatter(event) {
  const splatterSizes = [2, 4, 6];

  // Get the position of where the user clicked
  const xClick = event.clientX;
  const yClick = event.clientY;

  // Create a splatter div
  const header = document.querySelector("header");
  const splatter = document.createElement("div");
  splatter.className = "splatter";

  // Generate random splatter sizes
  const randomSize =
    splatterSizes[Math.floor(Math.random() * splatterSizes.length)];
  splatter.style.width = `${randomSize}px`;
  splatter.style.height = `${randomSize}px`;
  splatter.style.display = "block";

  // Position the splatters where the user clicked
  splatter.style.left = `${xClick}px`;
  splatter.style.top = `${yClick}px`;

  // Set random offsets using CSS variables for the animation
  const xRandom = Math.random() < 0.5 ? -1 : 1;
  const yRandom = Math.random() * 5;

  // Set CSS custom properties for dynamic values
  splatter.style.setProperty("--offset-x-1", `${2 * xRandom}px`);
  splatter.style.setProperty("--offset-y-1", `${-10 - yRandom}px`);
  splatter.style.setProperty("--offset-x-2", `${4 * xRandom}px`);
  splatter.style.setProperty("--offset-y-2", `${-20 - yRandom}px`);
  splatter.style.setProperty("--offset-x-3", `${8 * xRandom}px`);
  splatter.style.setProperty("--offset-y-3", `${-30 - yRandom}px`);
  splatter.style.setProperty("--offset-x-4", `${16 * xRandom}px`);
  splatter.style.setProperty("--offset-y-4", `${-40 - yRandom}px`);
  splatter.style.setProperty("--offset-x-5", `${32 * xRandom}px`);
  splatter.style.setProperty("--offset-y-5", `${-50 - yRandom}px`);
  splatter.style.setProperty("--offset-x-6", `${64 * xRandom}px`);
  splatter.style.setProperty("--offset-y-6", `${-30 - yRandom}px`);

  header.appendChild(splatter);

  // Handle removal of the splatter after animation
  splatter.addEventListener("animationend", () => {
    header.removeChild(splatter);
  });
}
