// skills.js
import skills from "../../skills.json";

const renderSkills = () => {
  /*
    <li class="skills-item">
        <a
            class="skills-link"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            >HTML</a
        >
    </li>
    */
  const skillsList = document.querySelector(".skills-list");
  const skillsDocumentFragment = document.createDocumentFragment();

  skills.forEach((skill) => {
    // Create skill item container
    const skillItem = document.createElement("li");
    skillItem.className = "skills-item";

    // Create skill link a tag
    const skillLink = document.createElement("a");
    skillLink.className = "skills-link";
    skillLink.href = skills.link;
    skillLink.target = "_blank";
    skillLink.textContent = skill.name;
    skillItem.appendChild(skillLink);

    // Append the skill item to the document fragment
    skillsDocumentFragment.appendChild(skillItem);
  });

  // Append the entire fragment to the DOM in one operation
  skillsList.appendChild(skillsDocumentFragment);
};

renderSkills();
