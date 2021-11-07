let addButtonA = document.querySelector("#add-button-A");
addButtonA.addEventListener("click", addItemA);
let addButtonB = document.querySelector("#add-button-B");
addButtonB.addEventListener("click", addItemB);
let addButtonC = document.querySelector("#add-button-C");
addButtonC.addEventListener("click", addItemC);
let addButtonD = document.querySelector("#add-button-D");
addButtonD.addEventListener("click", addItemD);

var a = document.getElementById("quantityA").innerText;
function addItemA(event) {
  event.preventDefault();
  a++;
  document.getElementById("quantityA").innerText = a;
}
var b = document.getElementById("quantityB").innerText;
function addItemB(event) {
  event.preventDefault();
  b++;
  document.getElementById("quantityB").innerText = b;
}
var c = document.getElementById("quantityC").innerText;
function addItemC(event) {
  event.preventDefault();
  c++;
  document.getElementById("quantityC").innerText = c;
}
var d = document.getElementById("quantityD").innerText;
function addItemD(event) {
  event.preventDefault();
  d++;
  document.getElementById("quantityD").innerText = d;
}
