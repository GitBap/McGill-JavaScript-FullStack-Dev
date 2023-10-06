/* Write the JavaScript code that adds a new dessert to the list when 
the user clicks on the button. The dessert name is chosen by the user.
Bonus points for adding the possibility of changing a dessert’s name 
when clicking on it. */

var dessertsList = document.getElementById("desserts");

function addDesert() {
  var dessertName = prompt("enter the dessert name:");
  var newDessert = document.createElement("li");

  newDessert.textContent = dessertName;
  dessertsList.appendChild(newDessert);
  s;
}

var addButton = document.getElementById("addButton");

addButton.addEventListener("click", addDesert);
