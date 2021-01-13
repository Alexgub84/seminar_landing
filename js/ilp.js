"use strict";

function init() {
  const alert = document.querySelector(".alert-link");
  const form = document.querySelector("form");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const formData = new FormData(form);

    fetch(form.getAttribute("action"), {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(formData).toString(),
    });
  });
}

function validate() {
  const form = document.querySelector(".needs-validation");
  form.classList.add("was-validated");
  return form.checkValidity();
}
