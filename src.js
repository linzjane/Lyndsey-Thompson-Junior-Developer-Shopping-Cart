let addButtonA = document.querySelector("#add-button-A");
addButtonA.addEventListener("click", addItemA);
let addButtonB = document.querySelector("#add-button-B");
addButtonB.addEventListener("click", addItemB);
let addButtonC = document.querySelector("#add-button-C");
addButtonC.addEventListener("click", addItemC);
let addButtonD = document.querySelector("#add-button-D");
addButtonD.addEventListener("click", addItemD);
let removeButtonA = document.querySelector("#remove-button-A");
removeButtonA.addEventListener("click", removeItemA);
let removeButtonB = document.querySelector("#remove-button-B");
removeButtonB.addEventListener("click", removeItemB);
let removeButtonC = document.querySelector("#remove-button-C");
removeButtonC.addEventListener("click", removeItemC);
let removeButtonD = document.querySelector("#remove-button-D");
removeButtonD.addEventListener("click", removeItemD);

var a = document.getElementById("quantityA").innerText;
function addItemA(event) {
  event.preventDefault();
  a++;
  document.getElementById("quantityA").innerText = a;
}
function removeItemA(event) {
  event.preventDefault();
  a--;
  document.getElementById("quantityA").innerText = a;
}
var b = document.getElementById("quantityB").innerText;
function addItemB(event) {
  event.preventDefault();
  b++;
  document.getElementById("quantityB").innerText = b;
}
function removeItemB(event) {
  event.preventDefault();
  b--;
  document.getElementById("quantityB").innerText = b;
}
var c = document.getElementById("quantityC").innerText;
function addItemC(event) {
  event.preventDefault();
  c++;
  document.getElementById("quantityC").innerText = c;
}
function removeItemC(event) {
  event.preventDefault();
  c--;
  document.getElementById("quantityC").innerText = c;
}
var d = document.getElementById("quantityD").innerText;
function addItemD(event) {
  event.preventDefault();
  d++;
  document.getElementById("quantityD").innerText = d;
}
function removeItemD(event) {
  event.preventDefault();
  d--;
  document.getElementById("quantityD").innerText = d;
}
