// about.js
import cards from "../../data/cards.json";

// ================== Render ================== //
// Renders the about cards and text with templates and document fragments
const renderAbout = () => {
  const cardsDiv = document.querySelector(".cards");
  const aboutTextDiv = document.querySelector(".about-text-container");

  const cardTemplate = document.getElementById("card-template");
  const aboutTextTemplate = document.getElementById("about-text-template");

  const cardDocumentFragment = document.createDocumentFragment();
  const aboutTextDocumentFragment = document.createDocumentFragment();

  cards.forEach((card) => {
    const cardClone = cardTemplate.content.cloneNode(true);
    const aboutTextClone = aboutTextTemplate.content.cloneNode(true);

    // Populate card template
    const cardDiv = cardClone.querySelector(".card");
    cardDiv.classList.add(card.position);
    cardDiv.id = card.title;

    cardClone.querySelector(".card-background").id = `background-${card.title}`;
    cardClone.querySelector(".card-number").textContent = card.number;

    card.tags.forEach((tag) => {
      const pTag = document.createElement("p");
      pTag.textContent = tag.description;
      cardClone.querySelector(".card-tags").appendChild(pTag);
    });

    cardClone.querySelector(".card-title").textContent =
      card.title.toUpperCase();

    // Populate about text template
    const aboutTextDiv = aboutTextClone.querySelector(".about-text");
    aboutTextDiv.classList.add(card.title);
    if (card.active) {
      aboutTextDiv.classList.add(card.active);
    }
    aboutTextClone.querySelector("h3").textContent = `My ${
      card.title.charAt(0).toUpperCase() + card.title.slice(1)
    }`;
    aboutTextClone.querySelector("p").textContent = card.description;

    // Append the populated clones to the document fragment
    cardDocumentFragment.appendChild(cardClone);
    aboutTextDocumentFragment.appendChild(aboutTextClone);
  });

  // Append the entire fragment to the DOM in one operation
  cardsDiv.appendChild(cardDocumentFragment);
  aboutTextDiv.appendChild(aboutTextDocumentFragment);
};

renderAbout();

// ================== Dragging ================== //
// Card dragging logic
let topCard = document.querySelector(".card.top");
let middleCard = document.querySelector(".card.middle");
let bottomCard = document.querySelector(".card.bottom");

let transformFactor = window.innerWidth > 991 ? 2 : 1;
const maxDragDistance = window.innerWidth / 2;
let dragDistance = 0;
let offsetX = 0;

// Function to reset card transforms
function resetCardTransforms(card) {
  card.style.setProperty("--top-translatex", `${-40 * transformFactor}px`);
  card.style.setProperty("--top-scale", 1);
  card.style.setProperty("--top-rotate", "-4deg");
  card.style.setProperty("--middle-translatex", `${10 * transformFactor}px`);
  card.style.setProperty("--middle-scale", 0.9);
  card.style.setProperty("--middle-rotate", "4deg");
  card.style.setProperty("--bottom-translatex", `${50 * transformFactor}px`);
  card.style.setProperty("--bottom-scale", 0.8);
  card.style.setProperty("--bottom-rotate", "-2deg");
}

resetCardTransforms(topCard);
resetCardTransforms(middleCard);
resetCardTransforms(bottomCard);

// Update transform factor on resize
window.addEventListener("resize", () => {
  transformFactor = window.innerWidth > 991 ? 2 : 1;
  console.log(transformFactor);
  resetCardTransforms(topCard);
  resetCardTransforms(middleCard);
  resetCardTransforms(bottomCard);
});

// Mouse event handlers
topCard.addEventListener("mousedown", mouseDown);

function mouseDown(event) {
  event.preventDefault();
  offsetX = event.clientX;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(event) {
  const newX = event.clientX - offsetX;
  handleDrag(newX);
}

function handleDrag(newX) {
  // Calculate the tension based on how far the card is dragged
  dragDistance = Math.max(-maxDragDistance, Math.min(newX, maxDragDistance));
  let tension = dragDistance / maxDragDistance; // Tension value between -1 and 1

  // Set CSS custom properties for dynamic values
  topCard.style.setProperty("--top-translatex", `${dragDistance}px`);
  topCard.style.setProperty("--top-rotate", `${-4 * tension}deg`);
  middleCard.style.setProperty("--middle-scale", 1);
  bottomCard.style.setProperty("--bottom-scale", 0.9);

  if (Math.abs(dragDistance) <= 160) {
    middleCard.style.setProperty("--middle-scale", 0.9);
    bottomCard.style.setProperty("--bottom-scale", 0.8);
  }
}

// Function to swap card positions
function cardSwap() {
  // Remove top class, set the new bottom position and reset transforms
  topCard.classList.remove("top");
  topCard.classList.add("bottom");
  resetCardTransforms(topCard);

  // Remove middle class, set the new top position and reset transforms
  middleCard.classList.remove("middle");
  middleCard.classList.add("top");
  resetCardTransforms(middleCard);

  // Remove bottom class, set the new middle position and reset transforms
  bottomCard.classList.remove("bottom");
  bottomCard.classList.add("middle");
  resetCardTransforms(bottomCard);

  // Update the descriptions
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

  // Update card references for next move
  [topCard, middleCard, bottomCard] = [middleCard, bottomCard, topCard];
}

// Mouse up event handler
function mouseUp() {
  topCard.removeEventListener("mousedown", mouseDown);
  topCard.style.transition = "transform 0.8s ease";

  if (Math.abs(dragDistance) > 160) {
    cardSwap();
  } else {
    resetCardTransforms(topCard);
  }

  topCard.addEventListener("mousedown", mouseDown);
  document.removeEventListener("mousemove", mouseMove);
  document.removeEventListener("mouseup", mouseUp);

  setTimeout(() => {
    topCard.style.transition = ""; // Reset transition
  }, 800);
}
