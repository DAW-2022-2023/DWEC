"use strict";
import { getArrayData } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('idForm').addEventListener("submit", function (event) {
    saveData(event);
  })
});

function saveData(event) {
  let message = "";

  const nombre = document.getElementById('iNombre').value;
  message += checkIfElementValueIsEmpty(nombre, 'Nombre');

  const apellido = document.getElementById('iApellido').value;
  message += checkIfElementValueIsEmpty(apellido, 'Apellido');

  const nacimiento = document.getElementById('iNacimiento').value;
  message += checkIfElementValueIsEmpty(nacimiento, 'Nacimiento');

  const genero = document.querySelector('input[name="genero"]:checked').checked;
  message += checkIfElementValueIsEmpty(genero, 'Genero');

  const iban = document.getElementById('ccc1').value
    + document.getElementById('ccc2').value
    + document.getElementById('ccc3').value
    + document.getElementById('ccc4').value;
  message += checkIfElementValueIsEmpty(iban, 'Iban');

  const pass = document.getElementById('iPass').value;
  message += checkIfElementValueIsEmpty(pass, 'Password');

  if (message !== "") {
    event.preventDefault();
    return;
  }
  let arrayData = getArrayData();
  arrayData.push({
    nombre: nombre,
    apellido: apellido,
    nacimiento: nacimiento,
    genero: genero,
    iban: iban,
    pass: pass

  })
  localStorage.setItem(JSON.stringify(arrayData))
}

function checkIfElementValueIsEmpty(element, nombreElemento) {
  if (element === null || element.value === null || element.value === undefined)
    return `The element ${nombreElemento} has no value! \n`;
}
