function handleMouseover(event) {
  console.log('Mouseover');
  //TODO: change the text on mouseover to 'Thanks for Hovering'
  event.target.innerText = 'Thanks for Hovering';
}

// TODO: handle appropriate mouse event
// when mouse leaves the button, change the label 'Mouseover here pls'
function handleMouseleave(event) {
  event.target.innerText = 'Mouseover here pls';
}

function handleChangebgcolor() {
  const divEL = document.getElementById('myDiv');
  console.dir(divEL);
  divEL.style.backgroundColor = 'red';
}

// TODO: Change the text color of div to white
function handleChangetextcolor() {
  const divEL = document.getElementById('myDiv');
  console.dir(divEL);
  divEL.style.color = 'white';
}

// TODO: Make the text Bold
function handleTextbold() {
  const divEL = document.getElementById('myDiv');
  console.dir(divEL);
  divEL.style.fontWeight = 'bold';
}

// TODO: Time and Date
function handleDisplayTime() {
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById('timeWrapper').innerText = currentTime;
}

// TODO: Random Number Generation 
function handleRandomNumber() {
  // Returns a random integer from 0 to 9 
  document.getElementById("randomNumber").innerHTML = Math.floor(Math.random() * 10) + 1;
}

// TODO: Learn about creating li and appending it within ul element using js
function handleSkillList() {
  var li = document.createElement("li");
  li.innerHTML = document.getElementById("skillInput").value;
  document.getElementById("skills").appendChild(li);
  // FIXME: Clear the input feild after adding the new skill
  document.getElementById("skillInput").value = "";
}

// TODO: html-js-api-demo
// 

function handleSavePincode() {
  let enteredPin = document.getElementById("pinInput").value;
  document.getElementById("pincode").innerText = enteredPin;
  localStorage.setItem("pincode", enteredPin);
  // sessionStorage.setItem("pincode", enteredPin);
}

function handleDeletePincode() {
  document.getElementById("pincode").innerText = "";
  localStorage.removeItem("pincode");
}

// TODO: Geolocation 
function handleLocateMe() {
  navigator.geolocation.getCurrentPosition(locationAccessGranted, locationAccessDenied);
}

function locationAccessGranted(position) {
  console.log('Access Granted');
  console.log(position);
  document.getElementById('latitude').innerText = position.coords.latitude;
  document.getElementById('longitude').innerText = position.coords.longitude;
}

function locationAccessDenied() {
  console.log('Access Denied');
}

// TODO: Drap and Drop API
function handleDragStart(event) {
  console.log('Startrd Dragging');
  console.log(event);
  event.dataTransfer.setData('draggedBox', event.target.id);
}

function handleDragOver(event) {
  console.log('inside HandleDragOver');
  //  Let's allow dropping by stopping the default nature of this event
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  console.log(event.dataTransfer.getData('draggedBox'));
  // Fetching the id of the element from dataTransfer
  const draggedElId = event.dataTransfer.getData('draggedBox');
  // appending the element inside droppableBox
  document.getElementById('droppableBox').append(document.getElementById(draggedElId));
}

// Webworker Demo 
const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('.result');
// const addResult = document.querySelector('.add-result');

if (window.Worker) {
  console.log('Loading calc-worker.js');
  // loading a JS file in the background
  const calcWorker = new Worker("./assets/scripts/calc-worker.js");

  first.onchange = function () {
    calcWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  second.onchange = function () {
    calcWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  // we are receiving the multiplied output sent by calc-worker.js 
  calcWorker.onmessage = function (event) {
    console.log(event.data);
    result.innerText = event.data;
  }


}
else {
  console.log('Your browser does not support web workers.');
}
