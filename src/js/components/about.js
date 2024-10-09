// about.js
import "../../styles/components/about.css";

let topCard = document.querySelector(".card.top");
let middleCard = document.querySelector(".card.middle");
let bottomCard = document.querySelector(".card.bottom");

const maxDragDistance = window.innerWidth / 2;
let dragDistance = 0;
let offsetX = 0;
let translateX = 0;

topCard.addEventListener("mousedown", mouseDown);

function mouseDown(event) {
  offsetX = event.clientX - translateX;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(event) {
  const newX = event.clientX - offsetX;

  // Calculate the tension based on how far the card is dragged
  dragDistance = Math.max(-maxDragDistance, Math.min(newX, maxDragDistance));
  let tension = dragDistance / maxDragDistance; // Tension value between -1 and 1

  topCard.style.transform = `translateX(${dragDistance}px) rotate(${
    -4 * tension
  }deg)`;
}

function mouseUp() {
  topCard.removeEventListener("mousedown", mouseDown);
  topCard.style.transition = "transform 0.8s ease";
  translateX = 0;

  console.log(Math.abs(dragDistance));
  if (Math.abs(dragDistance) > 160) {
    topCard.style.transform =
      "translate(140px, -10px) scale(0.8) rotate(-2deg)";

    topCard.classList.remove("top");
    topCard.classList.add("bottom");

    middleCard.classList.remove("middle");
    middleCard.classList.add("top");
    middleCard.style.transition = "transform 0.8s ease";
    middleCard.style.transform = "rotate(-4deg)";

    bottomCard.classList.remove("bottom");
    bottomCard.classList.add("middle");
    bottomCard.style.transition = "transform 0.8s ease";
    bottomCard.style.transform =
      "translate(80px, -10px) scale(0.9) rotate(4deg)";

    topCard.style.zIndex = 18;
    middleCard.style.zIndex = 20;
    bottomCard.style.zIndex = 19;

    [topCard, middleCard, bottomCard] = [middleCard, bottomCard, topCard];
  } else {
    topCard.style.transform = "rotate(-4deg)";
  }

  topCard.addEventListener("mousedown", mouseDown);
  document.removeEventListener("mousemove", mouseMove);
  document.removeEventListener("mouseup", mouseUp);

  setTimeout(() => {
    topCard.style.transition = ""; // Reset transition
  }, 300);
}
