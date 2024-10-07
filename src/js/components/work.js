// work.js
import projects from "../../projects.json";
import "../../styles/components/work.css";

const renderProjects = () => {
  const projectsList = document.querySelector(".projects-list");
  projectsList.innerHTML = "";
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    const imagePath = require(`../../assets/project_images/${project.image}`);
    projectDiv.className = "project";
    projectDiv.innerHTML = `
          <div class="project-image">
            <img src="${imagePath}" id="${project.id}" aria-label="${
      project.label
    }" />
          </div>
          <div class="project-content">
            <h2 class="project-title">${project.title}</h2>
            <h3>Technologies: <span class="technologies">${project.technologies.join(
              ", "
            )}</span></h3>
            <p>${project.description}</p>
            <a class="github-link" href="${
              project.github
            }" target="_blank">Link to GitHub repository</a>
          </div>
    `;
    projectsList.appendChild(projectDiv);
  });
};

renderProjects();
