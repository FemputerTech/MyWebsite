// about.js
import "../../styles/components/about.css";

const topCard = document.querySelector(".card.top");
let offsetX = 0;
let translateX = 0;

topCard.addEventListener("mousedown", mousedown);

function mousedown(event) {
  offsetX = event.clientX - translateX;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(event) {
  const newX = event.clientX - offsetX;
  topCard.style.transform = `translateX(${newX}px) rotate(-4deg)`;
}

function mouseUp(event) {
  topCard.style.transform = `translateX(0px) rotate(-4deg)`;
  translateX = 0;

  document.removeEventListener("mousemove", mouseMove);
}
