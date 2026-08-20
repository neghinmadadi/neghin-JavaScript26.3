
// footer element
const footerElement = document.createElement("footer");
document.body.appendChild(footerElement);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.textContent = `\u00A9 Neghin ${thisYear}`;
footer.appendChild(copyright);

const skills = ["Python", "Java", "JavaScript", "HTML", "CSS", "R", "MATLAB", "LaTeX", "Git", "GitHub"];

const skillSection = document.querySelector("#skills");
const skillsList = skillSection.querySelector("ul");

// loop through skills and add them to the skill section
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};


//************* add the following code later, AIRHub is getting picky*******/
// const skills = ["Programming Languages: ", "Software & Tools: "];

// const skillSelection = document.querySelector("#skills");
// const skillsList = skillSelection.querySelector("ul");

// // loop through skills and add them to the skill section
// for (let i = 0; i < skills.length; i++) {
//     let skill = document.createElement("li");
//     skill.textContent = skills[i];
//     skillsList.appendChild(skill);
// };

// // arrays to use for skillsList items
// const progLangsList = ["Python", "Java", "JavaScript", "HTML", "CSS", "R", "MATLAB", "LaTeX"];
// const softwareToolsList = ["Git", "GitHub", "Microsoft Office Programs"];

// // add a class to skillsList to be used by css
// skillsList.classList.add("skills-list");
// // add class atribute to list items
// skillsList.firstElementChild.classList.add("programming-langs");
// skillsList.lastElementChild.classList.add("software-tools");

// // add individual programming languages to their list item
// // create a variable of first li
// const progLangsItem = document.querySelector(".programming-langs");
// progLangsItem.textContent = "";
// // create bold element for title
// const progLangsBold = document.createElement("strong");
// progLangsBold.textContent = "Programming Languages: ";
// // create textNode for list of prog langs
// const progLangsText = document.createTextNode(progLangsList.join(", "));
// // append title and text node to the programming languages li
// progLangsItem.appendChild(progLangsBold);
// progLangsItem.appendChild(progLangsText);

// // add individual software and tools to their list item
// const softwareToolsItem = document.querySelector(".software-tools");
// softwareToolsItem.textContent = "";
// // create bold element for title
// const softToolsBold = document.createElement("strong");
// softToolsBold.textContent = "Software & Tools: ";
// // create a text node for software lists
// const softwareToolsText = document.createTextNode(softwareToolsList.join(", "));
// // append title and text node to the software and tools li
// softwareToolsItem.appendChild(softToolsBold);
// softwareToolsItem.appendChild(softwareToolsText);
