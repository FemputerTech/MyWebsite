document
  .querySelector(".overlay")
  .addEventListener("animationend", function () {
    this.style.display = "none"; // Hide the div after the animation ends
  });

function toggleNavList() {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display === "") {
    navList.style.display = "flex";
  } else {
    navList.style.display = "";
  }
}
