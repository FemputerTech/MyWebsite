// work.js
import projects from "../../projects.json";

const renderProjects = () => {
  /*
  <div class="project">
    <div class="project-image">
      <img src="" id="" aria-label="" />
    </div>
    <div class="project-content">
      <h3 class="project-title"></h3>
      <h4></h4>
      <p></p>
      <a class="github-link" href="" target="_blank"></a>
    </div>
  </div>
  */
  const projectsList = document.querySelector(".projects-list");
  const workDocumentFrag = document.createDocumentFragment();

  projectsList.innerHTML = ""; // Clear any existing content

  projects.forEach((project) => {
    // Create project container div
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    // Create project image container div and image
    const projectImageDiv = document.createElement("div");
    projectImageDiv.className = "project-image";

    const projectImage = document.createElement("img");
    projectImage.src = require(`../../assets/project_images/${project.image}`);
    projectImage.id = project.id;
    projectImage.ariaLabel = project.label;
    projectImageDiv.appendChild(projectImage);

    // Create project content container
    const projectContent = document.createElement("div");
    projectContent.className = "project-content";

    // Create and append project title, technologies, description, and github link
    const projectTitle = document.createElement("h3");
    projectTitle.className = "project-title";
    projectTitle.textContent = project.title;

    const projectTechnologies = document.createElement("h4");
    projectTechnologies.innerHTML = `Technologies: <span class="technologies">${project.technologies.join(
      ", "
    )}</span>`;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    const githubLink = document.createElement("a");
    githubLink.className = "github-link";
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.textContent = "Link to Github repository";

    // Append elements to projectContent div
    projectContent.append(
      projectTitle,
      projectTechnologies,
      projectDescription,
      githubLink
    );

    // Append project image and content divs to the project div
    projectDiv.append(projectImageDiv, projectContent);

    // Append project div to the document fragment
    workDocumentFrag.appendChild(projectDiv);
  });

  // Append the entire fragment to the DOM in one operation
  projectsList.appendChild(workDocumentFrag);
};

renderProjects();
