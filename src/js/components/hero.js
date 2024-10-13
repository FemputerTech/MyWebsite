// hero.js
import heroPNG from "../../assets/hero.png";
import resumePDF from "../../assets/Resume_Meghan_Leicht_Web.pdf";

const heroImageMeghan = document.getElementById("hero-image-meghan");
heroImageMeghan.src = heroPNG;

const heroButton = document.getElementById("hero-button");
heroButton.addEventListener("click", () => {
  window.open(resumePDF, "_blank"); // Opens the PDF in a new tab
});
