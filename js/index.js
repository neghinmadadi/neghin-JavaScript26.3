
/****** insert copyright text in footer ********/
// footer element
const footerElement = document.createElement("footer");
document.body.appendChild(footerElement);

// create date obj to add to footer
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.textContent = `\u00A9 ${thisYear} Neghin`;
footer.appendChild(copyright);

/******* create a list of skills and append it to the skills sec ******/
const skills = ["Python", "Java", "JavaScript", "HTML", "CSS", "R", "MATLAB", "LaTeX", "Git", "GitHub"];

const skillSection = document.querySelector("#skills");
const skillsList = skillSection.querySelector("ul");

// loop through skills and add them to the skills section
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};

//****** lesson 8 updates */
// query the message form
let messageForm = document.querySelector('form[name="leave_message"]');
// let messageForm = document.forms["leave_message"];
// add eventListener to it
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;

    console.log(name, email, message);

    // get messages section
    let messageSection = document.querySelector("#messages");
    // query the list in the messages section
    let messageList = messageSection.querySelector("ul");

    // create li element
    let newMessage = document.createElement("li");
    // add text content to it
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
                                <span class="message-text">${message}</span>`;

    // console.log(newMessage.querySelector("span").textContent);

    // create remove button
    let removeButton = document. createElement("button");
    removeButton.textContent = "remove";
    removeButton.type = "button";
    removeButton.className = "remove-button";
    // add an eventListener to it
    removeButton.addEventListener("click", function() {
        let entry = removeButton.parentNode;
        entry.remove();

        // hide the messeges sec when message list is empty
        if (messageList.children.length < 1) {
            messageSection.style.display = "none";
        } 
    });

    // create an edit button
    let editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.type = "button";
    editButton.className = "edit-button";
    // add event listener to it
    editButton.addEventListener("click", function() {
        let entry = editButton.parentNode;

        let messageSpan = newMessage.querySelector(".message-text");

        if (editButton.textContent === "edit") {
            let currentMessage = messageSpan.textContent;

            // create new input field for new message
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = currentMessage;
            inputField.className = "edit-input";

            // make message field editable
            entry.replaceChild(inputField, messageSpan);
            // change edit button's text to save
            editButton.textContent = "save";
        } else { // when save is clicked
            let inputField = entry.querySelector(".edit-input");
            let newMessageValue = inputField.value;

            // create a new <span> to for the new message
            let newSpan = document.createElement("span");
            newSpan.className = "message-text";
            newSpan.textContent = newMessageValue;

            // replace the input field with the updated text span
            entry.replaceChild(newSpan, inputField);
            editButton.textContent = "edit";
        };
    })

    // append both buttons to the li
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // hide the messeges sec when message list is empty
    if (messageList.children.length > 0) {
    //    messageSection.setAttribute("style", "display: block;");
    messageSection.style.display = "block";
    }


    // reset the form
    messageForm.reset();
});



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
