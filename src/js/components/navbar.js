// navbar.js
// import "../../styles/components/navbar.css";
const animatedGhostOverlay = document.querySelector(".animated-ghost-overlay");
const navbarToggle = document.querySelector(".navbar-toggle");
const header = document.querySelector("header");
const topBorder = document.getElementById("top-border");
const navLinks = document.querySelectorAll(".nav-link");
const splatterSizes = [2, 4, 6];

// ================== Animation ================== //
// Hide after animation ends, otherwise navbar will be completely covered
animatedGhostOverlay.addEventListener("animationend", function () {
  this.style.display = "none";
});

// ================== Toggle ================== //
navbarToggle.addEventListener("click", toggleNavList);

function toggleNavList() {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display === "") {
    navList.style.display = "flex";
  } else {
    navList.style.display = "";
  }
}

// ================== Navbar Hide ================== //
window.addEventListener("scroll", () => {
  if (window.scrollY >= 160) {
    // header.style.position = "fixed";
    // topBorder.style.position = "fixed";
    // hideNavbar();
    // header.addEventListener("mouseenter", showNavbar);
    // header.addEventListener("mouseleave", hideNavbar);
  } else {
    // header.style.position = "relative";
    // topBorder.style.position = "relative";
    // showNavbar();
    // header.removeEventListener("mouseenter", showNavbar);
    // header.removeEventListener("mouseleave", hideNavbar);
  }
});

const showNavbar = () => {
  header.style.opacity = 1;
  //   topBorder.style.opacity = 1;
  //   header.style.top = "0";
  //   topBorder.style.top = "0";
};

const hideNavbar = () => {
  header.style.opacity = 0;
  //   topBorder.style.opacity = 0;
  //   header.style.top = "-100px";
  //   topBorder.style.top = "-100px";
};

// ================== NavLinks ================== //
navLinks.forEach((link) => {
  link.addEventListener("mousedown", () => {
    link.style.boxShadow = "none";
    link.style.transform = "translate(2px, 2px)";
  });
  link.addEventListener("mouseup", () => resetStyles(link));
  link.addEventListener("mouseleave", () => resetStyles(link));
  link.addEventListener("click", () => {
    if (window.location.href === link.href) {
      console.log("splatter!");
      for (let i = 0; i < 3; i++) {
        createSplatter(link, event);
      }
    }
  });
});

// ~~~~~~~~~~~~~~~~~~~ mouseup & mouseleave ~~~~~~~~~~~~~~~~~~~ //
function resetStyles(link) {
  link.style.boxShadow = "4px 4px 1px rgba(0, 0, 0, 1)";
  link.style.transform = "translate(0, 0)";
}

// ~~~~~~~~~~~~~~~~~~~ click ~~~~~~~~~~~~~~~~~~~ //
function createSplatter(link, event) {
  //   const linkRect = link.getBoundingClientRect();
  //   const centerX = linkRect.left + linkRect.width / 2;
  //   const centerY = linkRect.top + linkRect.height / 2;
  const xClick = event.clientX;
  const yClick = event.clientY;
  const header = document.querySelector("header");
  const splatter = document.createElement("div");
  splatter.className = "splatter";
  const randomSize =
    splatterSizes[Math.floor(Math.random() * splatterSizes.length)];
  splatter.style.width = `${randomSize}px`;
  splatter.style.height = `${randomSize}px`;
  splatter.style.display = "block";
  splatter.style.left = `${xClick}px`;
  splatter.style.top = `${yClick}px`;
  header.appendChild(splatter);
  const x = Math.random() < 0.5 ? -1 : 1;
  const randomOffset = Math.random() * 5;
  const keyframes = [
    { opacity: 1, transform: `translateX(${0 * x}) translatey(0)` }, // 0%
    {
      opacity: 0,
      transform: `translate(${2 * x}px, ${-10 - randomOffset}px)`,
    }, // 10%
    {
      opacity: 1,
      transform: `translate(${4 * x}px, ${-20 - randomOffset}px)`,
    }, // 20%
    {
      opacity: 1,
      transform: `translate(${8 * x}px, ${-30 - randomOffset}px)`,
    }, // 30%
    {
      opacity: 1,
      transform: `translate(${16 * x}px, ${-40 - randomOffset}px)`,
    }, // 40%
    {
      opacity: 1,
      transform: `translate(${32 * x}px, ${-50 - randomOffset}px)`,
    }, // 50%
    {
      opacity: 0,
      transform: `translate(${64 * x}px, ${-30 - randomOffset}px)`,
    }, // 100%
  ];
  const animation = splatter.animate(keyframes, { duration: 400 });
  animation.onfinish = () => {
    header.removeChild(splatter);
  };
}
