// hero.js
import heroPNG from "../../assets/hero.png";
import resumePDF from "../../assets/Meghan_Leicht_Resume_Web_Developer.pdf";
import "../../styles/components/hero.css";

const heroImageMeghan = document.getElementById("hero-image-meghan");
heroImageMeghan.src = heroPNG;

// import resumePDF from "./assets/Meghan_Leicht_Resume_Web_Developer.pdf";

const heroButton = document.querySelector(".hero-button");
heroButton.addEventListener("click", () => {
  window.open(resumePDF, "_blank"); // Opens the PDF in a new tab
});
