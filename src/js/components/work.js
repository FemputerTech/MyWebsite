// work.js
import projects from "../../data/projects.json";

const renderProjects = () => {
  const projectsList = document.querySelector(".projects-list");
  const projectTemplate = document.getElementById("project-template");
  const workDocumentFrag = document.createDocumentFragment();

  projects.forEach((project) => {
    const projectClone = projectTemplate.content.cloneNode(true);

    // Populate template
    projectClone.querySelector(
      "img"
    ).src = require(`../../assets/project_images/${project.image}`);
    projectClone.querySelector("img").id = project.id;
    projectClone.querySelector("img").ariaLabel = project.label;
    projectClone.querySelector(".project-title").textContent = project.title;
    projectClone.querySelector(
      "h4"
    ).innerHTML = `Technologies: <span class="technologies">${project.technologies.join(
      ", "
    )}</span>`;
    projectClone.querySelector("p").textContent = project.description;
    projectClone.querySelector(".github-link").href = project.github;

    // Append the populated clone to the document fragment
    workDocumentFrag.appendChild(projectClone);
  });

  //Append the entire fragment to the DOM in one operation
  projectsList.appendChild(workDocumentFrag);
};

renderProjects();
