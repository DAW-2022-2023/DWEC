"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const email = document.getElementById("mail");
  const emailError = document.querySelector("#mailError");
  email.addEventListener("input", () => {
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "error";
    } else {
      showEmailError(email, emailError);
    }
  });

  const phone = document.querySelector("#phone");
  const phoneError = document.querySelector("#phoneError");
  phone.addEventListener("input", () => {
    if (phone.validity.valid) {
      phoneError.textContent = "";
      phoneError.className = "error";
    } else {
      showPhoneError(phone, phoneError);
    }
  });

  const birthday = document.querySelector("#birthday");
  const birthdayError = document.querySelector("#birthdayError");
  birthday.addEventListener("input", () => {
    if (checkBirthdayError(birthday, birthdayError)) {
      birthdayError.textContent = "";
      birthdayError.className = "error";
    }
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
      showEmailError(email, emailError);
      event.preventDefault();
      return;
    }

    if (!checkBirthdayError(birthday, birthdayError)) {
      event.preventDefault();
      return;
    }

    if (!phone.validity.valid) {
      showPhoneError(phone, phoneError);
      event.preventDefault();
      return;
    }
  });

  function checkBirthdayError(input, spanError) {
    if (input.value === null || input.value === undefined) {
      spanError.textContent = "Falta un valor";
      spanError.className = "error active";
      return false;
    } else if (getAge(input.value) < 18) {
      spanError.className = "error active";
      spanError.textContent = `Es necesario ser mayor de edad para registrarse.`;
      return false;
    }
    spanError.className = "error";
    return true;
  }

  function getAge(fecha) {
    const today = new Date();
    const birthDate = new Date(fecha);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function showPhoneError(input, spanError) {
    if (input.validity.valueMissing) {
      spanError.textContent = "Falta un valor";
    } else if (input.validity.patternMismatch) {
      spanError.textContent = "Entered value needs to be a Phone address.";
    } else if (input.validity.tooShort) {
      spanError.textContent = `Phone should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
    } else if (input.validity.tooLong) {
      spanError.textContent = `Phone should be at most ${input.maxLength} characters; you entered ${input.value.length}.`;
    }
    spanError.className = "error active";
  }

  function showEmailError(email, emailError) {
    if (email.validity.valueMissing) {
      emailError.textContent = "Falta un valor";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
  }
});
