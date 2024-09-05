document
  .querySelector(".overlay")
  .addEventListener("animationend", function () {
    this.style.display = "none"; // Hide the div after the animation ends
  });
