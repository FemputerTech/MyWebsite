// about.js
// import "../../styles/components/about.css";

let topCard = document.querySelector(".card.top");
let middleCard = document.querySelector(".card.middle");
let bottomCard = document.querySelector(".card.bottom");

let transformFactor = window.innerWidth > 991 ? 2 : 1;
let topTransform = [`${-40 * transformFactor}px, 0px`, 1, `${-4}deg`];
let middleTransform = [`${10 * transformFactor}px, -10px`, 0.9, `${4}deg`];
let bottomTransform = [`${50 * transformFactor}px, -10px`, 0.8, `${-2}deg`];

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

  middleCard.style.transition = "transform 0.8s ease";
  bottomCard.style.transition = "transform 0.8s ease";
  middleCard.style.transform = `translate(${
    middleTransform[0]
  }) scale(${1}) rotate(${middleTransform[2]})`;
  bottomCard.style.transform = `translate(${
    bottomTransform[0]
  }) scale(${0.9}) rotate(${bottomTransform[2]})`;
  if (Math.abs(dragDistance) <= 160) {
    middleCard.style.transform = `translate(${middleTransform[0]}) scale(${middleTransform[1]}) rotate(${middleTransform[2]})`;
    bottomCard.style.transform =
      "translate(48px, -10px) scale(0.8) rotate(-2deg)";
  }
}

function mouseUp() {
  topCard.removeEventListener("mousedown", mouseDown);
  topCard.style.transition = "transform 0.8s ease";
  translateX = 0;

  if (Math.abs(dragDistance) > 160) {
    topCard.classList.remove("top");
    topCard.classList.add("bottom");
    topCard.style.transform = `translate(${bottomTransform[0]}) scale(${bottomTransform[1]}) rotate(${bottomTransform[2]})`;

    middleCard.classList.remove("middle");
    middleCard.classList.add("top");
    middleCard.style.transition = "transform 0.8s ease";
    middleCard.style.transform = `translate(${topTransform[0]}) scale(${topTransform[1]}) rotate(${topTransform[2]})`;

    bottomCard.classList.remove("bottom");
    bottomCard.classList.add("middle");
    bottomCard.style.transition = "transform 0.8s ease";
    bottomCard.style.transform = `translate(${middleTransform[0]}) scale(${middleTransform[1]}) rotate(${middleTransform[2]})`;

    const aboutText = document.querySelector(".about-text");
    aboutText.style.opacity = 1;
    aboutText.style.transition = "opacity 2s ease";

    const CardTexts = document.querySelectorAll(".about-text");
    CardTexts.forEach((cardText) => {
      if (cardText.classList.contains(middleCard.id)) {
        cardText.classList.add("active");
        cardText.style.opacity = 1;
      } else {
        cardText.classList.remove("active");
        cardText.style.opacity = 0;
      }
    });

    topCard.style.zIndex = 18;
    middleCard.style.zIndex = 20;
    bottomCard.style.zIndex = 19;

    [topCard, middleCard, bottomCard] = [middleCard, bottomCard, topCard];
  } else {
    topCard.style.transform = `translate(${topTransform[0]}) scale(${topTransform[1]}) rotate(${topTransform[2]})`;
  }

  topCard.addEventListener("mousedown", mouseDown);
  document.removeEventListener("mousemove", mouseMove);
  document.removeEventListener("mouseup", mouseUp);

  setTimeout(() => {
    topCard.style.transition = ""; // Reset transition
  }, 800);
}
