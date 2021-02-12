"use strict";

window.addEventListener("DOMContentLoaded", initializeCustomerQueue);

const customerQueueList = [];

function initializeCustomerQueue() {
  // initialize by placing 40 random customer values
  for (let counter = 0; counter < 40; counter++) {
    const queueSize = getCustomersNumber();
    customerQueueList.push(queueSize);
  }
  loopCustomerQueueBarChart();
}

function loopCustomerQueueBarChart() {
  setTimeout(loopCustomerQueueBarChart, 1000);
  displayCustomers();
}

function getCustomersNumber() {
  return Math.floor(Math.random() * 32);
}

function displayCustomers() {
  for (let counter = 1; counter <= 40; counter++) {
    document.querySelector(`.bar:nth-of-type(${counter})`).style.marginTop = customerQueueList[counter - 1] * 3 + "vh";
  }
  changeCustomerQueueList();
}

function changeCustomerQueueList() {
  const queueSize = getCustomersNumber();
  customerQueueList.shift();
  customerQueueList.push(queueSize);
}
