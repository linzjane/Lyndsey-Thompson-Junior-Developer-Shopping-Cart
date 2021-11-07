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
var a2 = document.getElementById("subtotalA").innerText;
function addItemA(event) {
  event.preventDefault();
  a++;
  document.getElementById("quantityA").innerText = a;
  if (a === 3) {
    a2 = a * 0.433333333;
    document.getElementById("subtotalA").innerText = `£ ${a2}`;
  } else {
    if (a === 6) {
      a2 = a * 0.433333333;
      document.getElementById("subtotalA").innerText = `£ ${a2}`;
    } else {
      a2 = a * 0.5;
      document.getElementById("subtotalA").innerText = `£ ${a2}`;
    }
  }
}
function removeItemA(event) {
  event.preventDefault();
  a--;
  document.getElementById("quantityA").innerText = a;
  if (a === 3) {
    a2 = a * 0.433333333;
    document.getElementById("subtotalA").innerText = `£ ${a2}`;
  } else {
    if (a === 6) {
      a2 = a * 0.433333333;
      document.getElementById("subtotalA").innerText = `£ ${a2}`;
    } else {
      a2 = a * 0.5;
      document.getElementById("subtotalA").innerText = `£ ${a2}`;
    }
  }
}
var b = document.getElementById("quantityB").innerText;
var b2 = document.getElementById("subtotalB").innerText;
function addItemB(event) {
  event.preventDefault();
  b++;
  document.getElementById("quantityB").innerText = b;
  if (b === 2) {
    b2 = b * 0.225;
    document.getElementById("subtotalB").innerText = `£ ${b2}`;
  } else {
    if (b === 4) {
      b2 = b * 0.225;
      document.getElementById("subtotalB").innerText = `£ ${b2}`;
    } else {
      b2 = b * 0.3;
      document.getElementById("subtotalB").innerText = `£ ${b2}`;
    }
  }
}
function removeItemB(event) {
  event.preventDefault();
  b--;
  document.getElementById("quantityB").innerText = b;
  if (b === 2) {
    b2 = b * 0.225;
    document.getElementById("subtotalB").innerText = `£ ${b2}`;
  } else {
    if (b === 4) {
      b2 = b * 0.225;
      document.getElementById("subtotalB").innerText = `£ ${b2}`;
    } else {
      b2 = b * 0.3;
      document.getElementById("subtotalB").innerText = `£ ${b2}`;
    }
  }
}
var c = document.getElementById("quantityC").innerText;
var c2 = document.getElementById("subtotalC").innerText;
function addItemC(event) {
  event.preventDefault();
  c++;
  document.getElementById("quantityC").innerText = c;
  c2 = c * 0.2;
  document.getElementById("subtotalC").innerText = `£ ${c2}`;
}
function removeItemC(event) {
  event.preventDefault();
  c--;
  document.getElementById("quantityC").innerText = c;
  c2 = c * 0.2;
  document.getElementById("subtotalC").innerText = `£ ${c2}`;
}
var d = document.getElementById("quantityD").innerText;
var d2 = document.getElementById("subtotalD").innerText;
function addItemD(event) {
  event.preventDefault();
  d++;
  document.getElementById("quantityD").innerText = d;
  d2 = d * 0.15;
  document.getElementById("subtotalD").innerText = `£ ${d2}`;
}
function removeItemD(event) {
  event.preventDefault();
  d--;
  document.getElementById("quantityD").innerText = d;
  d2 = d * 0.15;
  document.getElementById("subtotalD").innerText = `£ ${d2}`;
}
function calculateTotal(event) {
  event.preventDefault();
  var sum = a2 + b2 + c2 + d2;
  document.getElementById("finalTotal").innerText = `£ ${sum}`;
}
let totalButton = document.querySelector("#calc-button");
totalButton.addEventListener("click", calculateTotal);
