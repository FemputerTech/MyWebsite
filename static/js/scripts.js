function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    // Optionally change the icon to the moon (or another dark theme indicator)
    document
      .querySelector(".theme-toggle box-icon")
      .setAttribute("name", "sun");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    // Optionally change the icon to the sun (or another light theme indicator)
    document
      .querySelector(".theme-toggle box-icon")
      .setAttribute("name", "moon");
  }
}
