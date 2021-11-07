let addButtonA = document.querySelector("#add-button-A");
addButtonA.addEventListener("click", addItemA);

var a = document.getElementById("quantityA").innerText;
function addItemA(event) {
  event.preventDefault();
  a++;
  document.getElementById("quantityA").innerText = a;
}
