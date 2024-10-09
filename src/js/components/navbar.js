// navbar.js
// import "../../styles/components/navbar.css";

function toggleNavList() {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display === "") {
    navList.style.display = "flex";
  } else {
    navList.style.display = "";
  }
}

const navbarToggle = document.querySelector(".navbar-toggle");
navbarToggle.addEventListener("click", toggleNavList);

const animatedGhostOverlay = document.querySelector(".animated-ghost-overlay");
animatedGhostOverlay.addEventListener("animationend", function () {
  this.style.display = "none"; // Hide after animation ends, otherwise navbar will be completely covered
});

const navLinks = document.querySelectorAll(".nav-link");

function resetStyles(link) {
  link.style.boxShadow = "4px 4px 1px rgba(0, 0, 0, 1)";
  link.style.transform = "translate(0, 0)";
}

navLinks.forEach((link) => {
  link.addEventListener("mousedown", () => {
    link.style.boxShadow = "none";
    link.style.transform = "translate(2px, 2px)";
  });
  link.addEventListener("mouseup", () => resetStyles(link));
  link.addEventListener("mouseleave", () => resetStyles(link));
});

// Navbar Hide
const header = document.querySelector("header");
const topBorder = document.getElementById("top-border");

const showNavbar = () => {
  header.style.opacity = 1;
  topBorder.style.opacity = 1;
};

const hideNavbar = () => {
  header.style.opacity = 0;
  topBorder.style.opacity = 0;
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= 160) {
    header.style.position = "fixed";
    topBorder.style.position = "fixed";
    hideNavbar();

    header.addEventListener("mouseenter", showNavbar);
    header.addEventListener("mouseleave", hideNavbar);
  } else {
    header.style.position = "relative";
    topBorder.style.position = "relative";
    showNavbar();

    header.removeEventListener("mouseenter", showNavbar);
    header.removeEventListener("mouseleave", hideNavbar);
  }
});

// Navlink clicks
function getRandomAdjustment() {
  return Math.random() < 0.5 ? -1 : 0; // Randomly returns -1 or 0
}

const options = {
  duration: 400,
};

const ballSizes = [2, 4, 6];

const homeNavLink = document.getElementById("home-page");

homeNavLink.addEventListener("click", () => {
  if (window.location.href === homeNavLink.href) {
    console.log("splatter!");
    for (let i = 0; i < 3; i++) {
      createBalls();
    }
  }
});

function createBalls() {
  const linkRect = homeNavLink.getBoundingClientRect();
  const centerX = linkRect.left + linkRect.width / 2;
  const centerY = linkRect.top + linkRect.height / 2;
  const balls = document.querySelector(".balls");
  const ball = document.createElement("div");
  ball.className = "ball";
  const randomSize = ballSizes[Math.floor(Math.random() * ballSizes.length)];
  ball.style.width = `${randomSize}px`;
  ball.style.height = `${randomSize}px`;
  ball.style.display = "block";
  ball.style.left = `${centerX}px`;
  ball.style.top = `${centerY}px`;
  balls.appendChild(ball);
  const x = Math.random() < 0.5 ? -1 : 1;
  const randomYOffset = Math.random() * 5;
  const keyframes = [
    { opacity: 1, transform: `translateX(${0 * x}) translatey(0)` }, // 0%
    {
      opacity: 0,
      transform: `translate(${2 * x}px, ${-10 - randomYOffset}px)`,
    }, // 10%
    {
      opacity: 1,
      transform: `translate(${4 * x}px, ${-20 - randomYOffset}px)`,
    }, // 20%
    {
      opacity: 1,
      transform: `translate(${8 * x}px, ${-30 - randomYOffset}px)`,
    }, // 30%
    {
      opacity: 1,
      transform: `translate(${16 * x}px, ${-40 - randomYOffset}px)`,
    }, // 40%
    {
      opacity: 1,
      transform: `translate(${32 * x}px, ${-50 - randomYOffset}px)`,
    }, // 50%
    {
      opacity: 0,
      transform: `translate(${64 * x}px, ${-30 - randomYOffset}px)`,
    }, // 100%
  ];
  const animation = ball.animate(keyframes, options);
  animation.onfinish = () => {
    balls.removeChild(ball);
  };
}
