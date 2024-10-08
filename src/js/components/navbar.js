// navbar.js
import "../../styles/components/navbar.css";
import resumePDF from "../../assets/Resume_Meghan_Leicht_Web.pdf";

const resume = document.getElementById("resume");
resume.href = resumePDF;

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
