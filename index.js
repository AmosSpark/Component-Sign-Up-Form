// VARIABLES

const form = document.querySelector(".form"),
  fName = document.querySelector(".first-name"),
  fMsg = document.querySelector(".fMsg"),
  lName = document.querySelector(".last-name"),
  lMsg = document.querySelector(".lMsg"),
  eMail = document.querySelector(".email-address"),
  eMsg = document.querySelector(".eMsg"),
  pass = document.querySelector(".password"),
  pMsg = document.querySelector(".pMsg"),
  inputFN = document.querySelector(".first-name"),
  inputLN = document.querySelector(".last-name"),
  inputEM = document.querySelector(".email-address"),
  inputP = document.querySelector(".password");

const loadEvents = () => {
  fName.addEventListener("keyup", valFName);
  lName.addEventListener("keyup", valLName);
  eMail.addEventListener("keyup", valEmail);
  pass.addEventListener("keyup", valPass);
};

// Event fn

// Validate firstname

const valFName = () => {
  const re = /^[A-Za-z]{2,10}$/;

  if (fName.value === "") {
    fMsg.classList.add("msg");
    fMsg.textContent = "First Name cannot be empty";
    inputFN.classList.add("icon");
  } else if (!re.test(fName.value)) {
    fMsg.classList.add("msg");
    // fMsg.textContent = "Must be between 2 - 10 alpha characters";
    inputFN.classList.add("icon");
  } else {
    fMsg.classList.remove("msg");
    inputFN.classList.remove("icon");
  }
};

// Validate lastname

const valLName = () => {
  const re = /^[A-Za-z]{2,10}$/;

  if (lName.value === "") {
    lMsg.classList.add("msg");
    lMsg.textContent = "Last Name cannot be empty";
    inputLN.classList.add("icon");
  } else if (!re.test(lName.value)) {
    lMsg.classList.add("msg");
    // lMsg.textContent = "Must be between 2 - 10 alpha characters";
    inputLN.classList.add("icon");
  } else {
    lMsg.classList.remove("msg");
    inputLN.classList.remove("icon");
  }
};

// Validate email

const valEmail = () => {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (eMail.value === "") {
    eMsg.classList.add("msg");
    eMsg.textContent = "Email cannot be empty";
    inputEM.classList.add("icon");
  } else if (!re.test(eMail.value)) {
    eMsg.classList.add("msg");
    // eMsg.textContent = "Looks like this is not an email";
    inputEM.classList.add("icon");
  } else {
    eMsg.classList.remove("msg");
    inputEM.classList.remove("icon");
  }
};

// Validate password

const valPass = () => {
  const re = /([a-z0-9A-Z_\-\.@]+){8,}/;

  if (pass.value === "") {
    pMsg.classList.add("msg");
    pMsg.textContent = "Password cannot be empty";
    inputP.classList.add("icon");
  } else if (!re.test(pass.value)) {
    pMsg.classList.add("msg");
    inputP.classList.add("icon");
    // pMsg.textContent = "Must be alphanumeric between 8 - 12 characters";
  } else {
    pMsg.classList.remove("msg");
    inputP.classList.remove("icon");
  }
};

// Invoke loadEvents
loadEvents();
