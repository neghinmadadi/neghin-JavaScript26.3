
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
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a <span class="message-text">${message}</span>`;

    // console.log(newMessage.querySelector("span").textContent);

    // create remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.type = "button";
    removeButton.className = "remove-button";
    // add an eventListener to it
    removeButton.addEventListener("click", function() {
        let entry = removeButton.parentNode;
        entry.remove();
    });


    // append remove button to the li
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);


    // reset the form
    messageForm.reset();
});


