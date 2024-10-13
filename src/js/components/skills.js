// skills.js
import skills from "../../data/skills.json";

const renderSkills = () => {
  const skillsList = document.querySelector(".skills-list");
  const skillsTemplate = document.getElementById("skills-template");
  const skillsDocumentFragment = document.createDocumentFragment();

  skills.forEach((skill) => {
    const skillClone = skillsTemplate.content.cloneNode(true);

    // Populate template
    skillClone.querySelector(".skills-link").href = skill.link;
    skillClone.querySelector(".skills-link").textContent = skill.name;

    // Append the populated skill clone to the document fragment
    skillsDocumentFragment.appendChild(skillClone);
  });

  // Append the entire fragment to the DOM in one operation
  skillsList.appendChild(skillsDocumentFragment);
};

renderSkills();
