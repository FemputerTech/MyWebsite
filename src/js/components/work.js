// work.js
import projects from "../../projects.json";
// import "../../styles/components/work.css";

const renderProjects = () => {
  const projectsList = document.querySelector(".projects-list");
  projectsList.innerHTML = "";
  projects.forEach((project) => {
    // Creating the project div
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectsList.appendChild(projectDiv);

    // Creating the project image div
    const projectImageDiv = document.createElement("div");
    projectImageDiv.className = "project-image";
    projectDiv.appendChild(projectImageDiv);

    // Creating the project image and appending it to project image div
    const projectImage = document.createElement("img");
    projectImage.src = require(`../../assets/project_images/${project.image}`);
    projectImage.id = project.id;
    projectImage.ariaLabel = project.label;
    projectImageDiv.append(projectImage);

    // Creating the project content
    const projectContent = document.createElement("div");
    projectContent.className = "project-content";
    projectDiv.appendChild(projectContent);

    // Creating the project title and appending it to project content div
    const projectTitle = document.createElement("h3");
    projectTitle.className = "project-title";
    projectTitle.textContent = project.title;
    projectContent.appendChild(projectTitle);

    // Creating the project technologies and appending it to project content div
    const projectTechnologies = document.createElement("h4");
    projectTechnologies.innerHTML = `Technologies: <span class="technologies">${project.technologies.join(
      ", "
    )}</span>`;
    projectContent.appendChild(projectTechnologies);

    // Creating the project description and appending it to project content div
    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectContent.appendChild(projectDescription);

    // Creating the project github link and appending it to project content div
    const githubLink = document.createElement("a");
    githubLink.className = "github-link";
    githubLink.setAttribute("href", project.github);
    githubLink.setAttribute("target", "_blank");
    githubLink.textContent = "Link to Github repository";
    projectContent.appendChild(githubLink);
  });
};

renderProjects();
