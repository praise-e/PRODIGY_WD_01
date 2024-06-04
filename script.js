let date = document.querySelector("#date");
let dateInput = document.querySelectorAll("#date")[1];

let time = document.querySelector("#time");
let emailContainer = document.querySelector(".email-container");


function showForm() {
  let form = document.getElementById("services");
  let scrollDiv = document.querySelector(".scroll-div");

  form.style.display = "block";
  scrollDiv.style.display = "block";
}


function showMode() {
  let services = document.getElementById("service");

  let type = document.querySelector("#type");

  let trainingRegistration = document.getElementById("training-reg");
  let show = document.querySelector(".show");

  if (Number(services.value) < 4) {
    type.style.display = "block";
    date.style.display = "none";
    time.style.display = "none";
    trainingRegistration.style.display = "none";
  }

  if (Number(services.value) === 4) {
    type.style.display = "none";
    date.style.display = "none";
    time.style.display = "none";
    trainingRegistration.style.display = "block";
  }

  let learningModeOptions = document.getElementsByClassName("learning-mode");
  for (let i = 0; i < learningModeOptions.length; i++) {
    if (learningModeOptions[i].checked) {
      emailContainer.style.display = "block";
    }
  }

  if (show.checked) {
    type.style.display = "block";
  }
  let userName = document.getElementById("name").value;
  let customerName = document.getElementById("customerName");
  customerName.innerHTML = userName;
}
function dateAndTime() {
  let typeSelect = document.querySelectorAll("#type")[1];

  if (Number(typeSelect.value) === 1 || Number(typeSelect.value) === 2) {
    date.style.display = "block";
    if (dateInput !== "") {
      time.style.display = "block";
        emailContainer.style.display = "block";
    }
  }
}
console.log((document.querySelector(".scroll-icon")).firstChild.data)