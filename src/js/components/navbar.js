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
