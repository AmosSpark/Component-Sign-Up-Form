// VARIABLES
const form = document.querySelector(".form"),
  fName = document.querySelector(".first-name"),
  lName = document.querySelector(".last-name"),
  eMail = document.querySelector(".email-address"),
  pass = document.querySelector(".password");

const loadEvents = () => {
  fName.addEventListener("keyup", valFName);
  lName.addEventListener("keyup", valLname);
  eMail.addEventListener("keyup", valEmail);
  pass.addEventListener("keyup", valPass);
};

// Event fn

// Validate firstname

const valFName = () => {
  //   console.log(fName.value);
};

// Validate lastname

const valLname = () => {
  //   console.log(lName.value);
};

// Validate email

const valEmail = () => {
  //   console.log(eMail.value);
};

// Validate password

const valPass = () => {
  //   console.log(pass.value);
};

// Invoke loadEvents
loadEvents();
