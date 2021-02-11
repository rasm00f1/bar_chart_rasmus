"use strict";

window.addEventListener("DOMContentLoaded", init);

const customerArray = [];

function init() {
  // initialize by placing 40 random customer values
  for (let counter = 0; counter < 40; counter++) {
    const queueSize = getCustomersNumber();
    customerArray.push(queueSize);
  }
  loop();
}

function loop() {
  setTimeout(loop, 1000);
  displayCustomers();
}

function getCustomersNumber() {
  return Math.floor(Math.random() * 32);
}

function displayCustomers() {
  for (let counter = 1; counter <= 40; counter++) {
    document.querySelector(`.bar:nth-of-type(${counter})`).style.marginTop = customerArray[counter - 1] * 3 + "vh";
  }
  changeCustomerArray();
}

function changeCustomerArray() {
  const queueSize = getCustomersNumber();
  customerArray.shift();
  customerArray.push(queueSize);
}
