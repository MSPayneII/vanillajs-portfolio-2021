const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#message");
const submit = document.querySelector("#submit");

const nameError = document.querySelector("#name-error-msg");
const emailError = document.querySelector("#email-error-msg");
const messageError = document.querySelector("#message-error-msg");

fullName.value = "";
email.value = "";
message.value = "";

submit.addEventListener("click", (event) => {
  event.preventDefault;

  if (fullName.value.length === 0) {
    fullName.placeholder = "";
    fullName.style.border = "1px solid #f43030";
    fullName.style.paddingRight = "2rem";
    fullName.style.marginBottom = "0.375rem";
    nameError.style.display = "block";
    event.preventDefault();
  } else {
    nameError.style.display = "none";
    fullName.style.border = "none";
  }

  if (email.value.length === 0 || email.value.includes("@") === false) {
    email.placeholder = "";
    email.style.color = "red";
    email.style.border = "1px solid #f43030";
    email.style.marginBottom = "0.375rem";
    emailError.style.display = "block";
    event.preventDefault();
  } else {
    emailError.style.display = "none";
    email.style.border = "none";
    email.style.color = "#33323d";
  }
  if (message.value.length === 0) {
    message.placeholder = "";
    message.style.border = "1px solid #f43030";
    message.style.marginBottom = "0.375rem";
    messageError.style.display = "block";
    messageError.style.marginBottom = "2rem";
    event.preventDefault();
  } else {
    messageError.style.display = "none";
    message.style.border = "none";
    message.style.marginBottom = "2.125rem";
  }
});
